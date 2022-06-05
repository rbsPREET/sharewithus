import express from 'express'
import { getPosts, getPost, createPost, updatePost, deletePost, getPostCreator, checkPostRoute, getPostsBySearch, getPostComments, getPostsAdmin } from '../controllers/post.js'
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getPosts)
// search && pagination
router.get('/search', getPostsBySearch)

router.get('/:id', getPost)
router.post('/', verifyTokenAndAuthorization, createPost)
router.patch('/:id', verifyTokenAndAuthorization, updatePost)
//router.patch('/:id/rate', auth, ratePost)
router.delete('/:id', verifyTokenAndAuthorization, deletePost)

// helpers routes
router.get('/:id/comments', getPostComments)
router.get('/:id/creator', getPostCreator)
router.get('/:id/check/:categoryName', checkPostRoute)

// admin
router.get('/admin/getall', verifyTokenAndAdmin, getPostsAdmin)

export default router