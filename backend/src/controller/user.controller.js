import { User } from "../models/user.model.js"; // Import the User model
import { Message } from "../models/message.model.js"; // Import the Message model

export const getAllUsers = async (req, res, next) => {
  try {
    const currentUserId = req.auth.userId; // Get the current user's ID from the request object
    const users = await User.find({ clerkId: { $ne: currentUserId } });
    res.status(200).json(users);
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const myId = req.auth.userId; // Get the current user's ID from the request object
    const { userId } = req.params; // Get the userId from the request parameters

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userId },
        { senderId: userId, receiverId: myId },
      ],
    }).sort({ createdAt: 1 });
    
    res.status(200).json(messages);
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
};
