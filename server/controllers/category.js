import mongoose from "mongoose"
import Category from "../models/Category.js"
import Post from "../models/Post.js"

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const getCategory = async (req, res) => {
    const { categoryName } = req.params
    try {
        const category = await Category.findOne({ categoryName })
        res.status(200).json(category)
    } catch (err) {
        res.status(404).json({ message: "Couldn't find an Category with that name" })
    }
}

export const createCategory = async (req, res) => {
    const categoryBody = req.body
    const categoryName = req.body.categoryName
    const categoryToCreate = new Category({ ...categoryBody }) // Add Middleware to get UserId
    try {
        const isCategoryExist = await Category.findOne({ categoryName })
        if (isCategoryExist)
            return res.status(400).json({ message: `${req.body.categoryName} category already exist` })
        await categoryToCreate.save()
        res.status(201).json(categoryToCreate)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const updateCategory = async (req, res) => {
    const { id: _id } = req.params
    const categoryBody = req.body
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid Category Id')
    const categoryToUpdate = await Category.findByIdAndUpdate(_id, { ...categoryBody, _id }, { new: true })
    res.json(categoryToUpdate)
}

export const deleteCategory = async (req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Not a valid Category Id')
    await Category.findByIdAndDelete(_id)
    res.json({ message: `Category with the Id: ${_id} and Name "${req.body.name}" has been deleted` })
}

export const getPopularCategoryPosts = async (req, res) => {
    const { id: categoryId } = req.params
    console.log(categoryId)
    if (!mongoose.Types.ObjectId.isValid(categoryId))
        return res.status(404).send('Not a valid Category Id')
    try {
        const popularPosts = await Post.find({ categoryId }).limit(5).populate([
            { path: 'createdBy', model: 'User', select: 'username email age gender' },
            { path: 'categoryId', model: 'Category', select: 'categoryName' }
        ])
        res.status(200).json(popularPosts)
    } catch (error) {
        res.status(404).json({ message: err })
    }
}