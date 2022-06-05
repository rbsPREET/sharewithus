import mongoose from "mongoose"
import Category from "../models/Category.js"
import Comment from "../models/Comment.js"
import Post from "../models/Post.js"
import User from "../models/User.js"

export const createComment = async (req, res) => {
    const { userId, description, categoryName, postId } = req.body
    console.log(categoryName)
    let isCategoryExist
    let isPostExist
    let commentToCreate
    try {
        isCategoryExist = await Category.findOne({ categoryName })
        isPostExist = await Post.findById(postId)
        const { _id, username, age, gender } = await User.findById(userId)
        commentToCreate = new Comment({ description, categoryId: isCategoryExist._id, postId: isPostExist._id, createdBy: { userId: _id, username, age, gender } })
        console.log(commentToCreate)
    } catch (error) {
        res.status(409).json({ message: "The Category || Post is not exist" })
    }

    try {
        await commentToCreate.save()
        try {
            // update the category table with the id of the new post in the posts array
            console.log("Start")
            await Post.findByIdAndUpdate(isPostExist._id, { $push: { comments: commentToCreate._id }, $inc: { commentsCount: 1 } }, { new: true })
            await Category.findByIdAndUpdate(isCategoryExist._id, { $inc: { commentsCount: 1 } })
            console.log("End")
        } catch (error) {
            return res.status(409).json({ message: "The Category/Post Id is not belong to any Category/Post" })
        }
        return res.status(201).json(commentToCreate)
    } catch (err) {
        res.status(409).json({ message: "Something went wrong, try again later" })
    }
}