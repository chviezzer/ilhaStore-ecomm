import express from 'express'
const router = express.Router()
import { protect } from '../middlewares/authMiddleware.js'
import {
  registerUser,
  authUser,
  getUserProfile,
  upddateUserProfile,
} from '../controllers/userController.js'

router.post('/', registerUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, upddateUserProfile)

export default router
