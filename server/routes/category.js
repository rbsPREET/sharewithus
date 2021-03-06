import express from 'express'
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory, getPopularCategoryPosts } from '../controllers/category.js'
import { verifyTokenAndAdmin } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getCategories)
router.get('/:categoryName', getCategory)
router.post('/', verifyTokenAndAdmin, createCategory)
router.patch('/:id', verifyTokenAndAdmin, updateCategory)
//router.patch('/:id/rate', auth, ratePost)
router.delete('/:id', verifyTokenAndAdmin, deleteCategory)

router.get('/:id/popular', getPopularCategoryPosts)

export default router