import mongoose from "mongoose"
import Category from "../models/Category.js"
import Post from "../models/Post.js"
import User from "../models/User.js"

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find(req.query).limit(req.query.limit).populate([
            { path: 'createdBy', model: 'User', select: 'username email age gender' },
            { path: 'categoryId', model: 'Category', select: 'categoryName' }
        ])
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const getPost = async (req, res) => {
    try {
        const post = await Post.findOne(req.title)
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
    const postBody = req.body
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid Post Id')
    const postToUpdate = await Post.findByIdAndUpdate(_id, { ...postBody, _id }, { new: true })
    res.json(postToUpdate)
}

export const deletePost = async (req, res) => {
    const { id: _id, categoryId } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid Post Id')
    try {
        await Post.findByIdAndDelete(_id)
        try {
            await Category.findByIdAndUpdate(categoryId, {
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