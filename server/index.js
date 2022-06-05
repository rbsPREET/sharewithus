import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import userRoute from './routes/users.js'
import categoryRoute from './routes/category.js'
import commentRoute from './routes/comments.js'

dotenv.config()

const PORT = process.env.PORT || 5001

const app = express()

// POST requests parser
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

// CORS Policy
app.use(cors())

app.use(express.json())

app.use(cookieParser())

// Routes
app.use('/auth', authRoute)
app.use('/users', userRoute)
app.use('/categories', categoryRoute)
app.use('/posts', postRoute)
app.use('/comments', commentRoute)

// Mongo DB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err))