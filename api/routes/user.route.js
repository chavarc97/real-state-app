import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js'
import { verifyToken } from '../middleware/verifyUser.js';

const router = express.Router();

router.get('/test', test);
// Update user and add verifyToken middleware
router.post('/update/:id', verifyToken, updateUser)


export default router; 