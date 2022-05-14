import mongoose from "mongoose"
import User from "../models/User.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().limit(req.query.limit)
        res.status(200).json(users)
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const getUser = async (req, res) => {
    try {
        const { id: _id } = req.params
        const user = await User.findById(_id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: "Please try again later" })
    }
}