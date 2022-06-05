import mongoose from "mongoose"
import Category from "../models/Category.js"
import Post from "../models/Post.js"
import User from "../models/User.js"

export const getPosts = async (req, res) => {
    const { categoryId, page } = req.query
    try {
        // Pagination
        const PAGE_POSTS_LIMIT = 2 // TODO?: allow user to choose how many posts per page
        const startIndex = (Number(page) - 1) * PAGE_POSTS_LIMIT // start index of a post in a selected page
        if (categoryId === undefined) {
            const total = await Post.find({ status: true }).countDocuments({})
            const posts = await Post.find({ status: true }).sort({ _id: -1 }).limit(15).skip(startIndex).populate([
                { path: 'createdBy', model: 'User', select: 'username email age gender' },
                { path: 'categoryId', model: 'Category', select: 'categoryName' }
            ])
            res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / PAGE_POSTS_LIMIT) })
        } else {
            const total = await Post.find({ categoryId }).countDocuments({})
            const posts = await Post.find({ categoryId }).sort({ _id: -1 }).limit(PAGE_POSTS_LIMIT).skip(startIndex).populate([
                { path: 'createdBy', model: 'User', select: 'username email age gender' },
                { path: 'categoryId', model: 'Category', select: 'categoryName' }
            ])
            res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / PAGE_POSTS_LIMIT) })
        }
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate([
            { path: 'createdBy', model: 'User', select: 'username email age gender' },
            { path: 'categoryId', model: 'Category', select: 'categoryName' },
            { path: 'comments', model: 'Comment', select: 'description createdAt createdBy' }
        ])
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const createPost = async (req, res) => {
    const categoryName = req.body.category // category name
    let isCategoryExist
    try {
        isCategoryExist = await Category.findOne({ categoryName })
    } catch (error) {
        res.status(409).json({ message: "The Category is not exist" })
    }

    const postBody = req.body
    const postToCreate = new Post({ ...postBody, categoryId: isCategoryExist._id, createdBy: req.user.id })

    try {
        await postToCreate.save()
        try {
            // update the category table with the id of the new post in the posts array
            await Category.findByIdAndUpdate(isCategoryExist._id, { $push: { posts: postToCreate._id } })
        } catch (error) {
            res.status(409).json({ message: "The Category Id is not belong to any Category" })
        }
        res.status(201).json(postToCreate)
    } catch (err) {
        res.status(409).json({ message: "Something went wrong, try again later" })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const { status } = req.body
    const postBody = req.body
    console.log(status)
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid Post Id')
    const postToUpdate = await Post.findByIdAndUpdate(_id, { ...postBody, _id, status }, { new: true })
    res.json(postToUpdate)
}

export const deletePost = async (req, res) => {
    const { id: _id, categoryId } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid Post Id')
    try {
        const postToDelete = await Post.findByIdAndDelete(_id)
        try {
            await Category.findByIdAndUpdate(postToDelete.categoryId, {
                $pull: { posts: _id }
            })
        } catch (error) {
            res.status(409).send("No category with that Id")
        }
        res.json({ message: `Post with the Id: ${_id} has been deleted` })
    } catch (error) {
        res.status(404).send('No post with that Id')
    }
}

export const getPostCreator = async (req, res) => {
    const { createdBy } = req.params
    try {
        const postCreator = await User.findById(createdBy)
        res.json(postCreator)
    } catch (error) {
        res.status(404).send('The User is either Banned or not exist')
    }
}

export const checkPostRoute = async (req, res) => {
    const { id, categoryName } = req.params
    try {
        const category = await Category.findOne({ categoryName })

        await Post.findOne({ categoryId: category._id })

        const post = await Post.findById(id)
        res.json(post)
    } catch (err) {
        res.status(404).json({ message: "Incorrect category path" })
    }
}

export const getPostsBySearch = async (req, res) => {
    const { categoryId, searchQuery } = req.query
    try {
        const title = new RegExp(searchQuery, 'i')
        const posts = await Post.find({ categoryId, $or: [{ title }] }).populate([
            { path: 'createdBy', model: 'User', select: 'username email age gender' },
            { path: 'categoryId', model: 'Category', select: 'categoryName' }
        ]) // $or => search given queries

        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: "No posts have been found, try again later" })
    }
}

export const getPostComments = async (req, res) => {
    const { id } = req.params
    try {
        const postComments = await Post.findById(id, { comments: 1 }).populate(
            { path: 'comments', model: 'Comment', select: 'description createdAt createdBy' })
        res.status(200).json(postComments)
    } catch (error) {
        res.status(404).json({ message: "No comments have been found, try again later" })
    }
}

export const getPostsAdmin = async (req, res) => {
    const { page } = req.query
    try {
        // Pagination
        const PAGE_POSTS_LIMIT = 2 // TODO?: allow user to choose how many posts per page
        const startIndex = (Number(page) - 1) * PAGE_POSTS_LIMIT // start index of a post in a selected page
        const total = await Post.find().countDocuments({})
        const posts = await Post.find().sort({ _id: -1 }).limit(10).skip(startIndex).populate([
            { path: 'createdBy', model: 'User', select: 'username email age gender' },
            { path: 'categoryId', model: 'Category', select: 'categoryName' }
        ])
        res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / PAGE_POSTS_LIMIT) })
    } catch (err) {
        res.status(404).json({ message: err })
    }
}