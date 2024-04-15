import { Request, Response } from 'express';
import User from '../models/user';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message });
    }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};

// Update user by ID
export const updateUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};

// Delete user by ID
export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        // @ts-ignore
        res.status(500).json({ message: error.message });
    }
};