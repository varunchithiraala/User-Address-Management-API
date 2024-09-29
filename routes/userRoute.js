import express from 'express';
import { registerUser } from '../controllers/userController.js';

// Create a new router instance
const userRoute = express.Router();

// Define the POST route for user registration
userRoute.post('/register', registerUser);

export default userRoute;
