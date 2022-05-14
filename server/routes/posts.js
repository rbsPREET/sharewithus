import express from 'express'
import { getPosts, getPost, createPost, updatePost, deletePost, getPostCreator } from '../controllers/post.js'
import { verifyTokenAndAuthorization } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/:id/creator', getPostCreator)
router.post('/', verifyTokenAndAuthorization, createPost)
router.patch('/:id', verifyTokenAndAuthorization, updatePost)
//router.patch('/:id/rate', auth, ratePost)
router.delete('/:id/:categoryId', verifyTokenAndAuthorization, deletePost)

export default router