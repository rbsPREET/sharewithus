import express from 'express'
import { getUsers, getUser } from '../controllers/user.js'
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../middleware/auth.js'

const router = express.Router()

router.get('/', verifyTokenAndAdmin, getUsers)
router.get('/:id', verifyTokenAndAuthorization, getUser)

export default router