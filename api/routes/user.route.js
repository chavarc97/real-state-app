import express from 'express';
import { test, updateUser, deleteUser, getUserListing, getUser } from '../controllers/user.controller.js'
import { verifyToken } from '../middleware/verifyUser.js';

const router = express.Router();

router.get('/test', test);
// Update user and add verifyToken middleware
router.post('/update/:id', verifyToken, updateUser)
// Delete user and add verifyToken middleware
router.delete('/delete/:id', verifyToken, deleteUser)
// Get the listings of a user and add verifyToken middleware
router.get('/listings/:id', verifyToken, getUserListing)
router.get('/:id', verifyToken, getUser)


export default router; 