import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { username, email, password, confirmPassword, age, gender } = req.body
    try {
        // check if email already in use by another user
        const isUserEmailExist = await User.findOne({ email })
        if (isUserEmailExist)
            return res.status(400).json({ message: `${email} email is already in use by another user` })
        // check if username already in use by another user
        const isUserUsernameExist = await User.findOne({ username })
        if (isUserUsernameExist)
            return res.status(400).json({ message: `${username} username is already in use by another user` })

        if (password !== confirmPassword)
            return res.status(400).json({ message: "Password and Confirm Password are not match" })

        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({ username, email, password: hashedPassword, age, gender })
        const token = jwt.sign({ id: result._id, email: result.email, isAdmin: result.isAdmin }, process.env.JWT_SECRET, { expiresIn: "3h" })
        res.cookie(
            "access_token",
            token,
            {
                httpOnly: true
            }).status(200).json({ result, token })
    } catch (err) {
        res.status(500).json({ message: "ERROR: Please try again later" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const isUserExist = await User.findOne({ email })
        if (!isUserExist)
            return res.status(404).json({ message: `${email} email is not in use by any user` })

        const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password)
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Email or Password are not correct" })

        const token = jwt.sign({ id: isUserExist._id, email: isUserExist.email, isAdmin: isUserExist.isAdmin }, process.env.JWT_SECRET, { expiresIn: "3h" })
        res.cookie(
            "access_token",
            token,
            {
                httpOnly: true
            }).status(200).json({ result: isUserExist, token })
    } catch (err) {
        res.status(500).json({ message: "ERROR: Please try again later" })
    }
}