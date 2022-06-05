import express from 'express'
import { createComment } from '../controllers/comment.js'
import { verifyTokenAndAuthorization } from '../middleware/auth.js'

const router = express.Router()

router.post('/', verifyTokenAndAuthorization, createComment)

export default router