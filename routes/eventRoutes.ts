import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEventById, deleteEventById } from '../controllers/eventController';

const router = express.Router();

// Create a new event
router.post('/', createEvent);

// Get all events
router.get('/', getAllEvents);

// Get event by ID
router.get('/:eventId', getEventById);

// Update event by ID
router.put('/:eventId', updateEventById);

// Delete event by ID
router.delete('/:eventId', deleteEventById);

export default router;