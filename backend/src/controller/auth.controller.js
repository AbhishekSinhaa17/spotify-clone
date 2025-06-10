import { User } from "../models/user.model.js";

export const authCallback =  async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    //check if user already exists in the database
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      //create a new user
      await User.create({
        name: `${firstName || ""} ${lastName ||"" }`.trim(),
        imageUrl: imageUrl,
        clerkId: id,
      });
    }
    //if user already exists, update the user with the new imageUrl
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in auth callback", error);
    next(error);
  }
}