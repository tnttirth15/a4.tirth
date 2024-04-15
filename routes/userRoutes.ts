import express from 'express';
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/userController';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getAllUsers);

// Get user by ID
router.get('/:userId', getUserById);

// Update user by ID
router.put('/:userId', updateUserById);

// Delete user by ID
router.delete('/:userId', deleteUserById);

export default router;