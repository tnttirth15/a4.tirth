import express from 'express';
import { createPost, getAllPosts, getPostById, updatePostById, deletePostById } from '../controllers/postController';

const router = express.Router();

// Create a new post
router.post('/', createPost);

// Get all posts
router.get('/', getAllPosts);

// Get post by ID
router.get('/:postId', getPostById);

// Update post by ID
router.put('/:postId', updatePostById);

// Delete post by ID
router.delete('/:postId', deletePostById);

export default router;