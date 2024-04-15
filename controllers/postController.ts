import { Request, Response } from 'express';
import Post from '../models/post';

// Create a new post
export const createPost = async (req: Request, res: Response) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message });
    }
};

// Get all posts
export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};

// Get post by ID
export const getPostById = async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};

// Update post by ID
export const updatePostById = async (req: Request, res: Response) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.postId, req.body, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};

// Delete post by ID
export const deletePostById = async (req: Request, res: Response) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};