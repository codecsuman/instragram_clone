import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
// import upload from "../middlewares/multer.js"; // Removed unless you are sending files in chat

import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// POST: Send a message to a specific user
router.route('/send/:id').post(isAuthenticated, sendMessage);

// GET: Retrieve all messages between the logged-in user and a specific user
router.route('/all/:id').get(isAuthenticated, getMessage);

export default router;