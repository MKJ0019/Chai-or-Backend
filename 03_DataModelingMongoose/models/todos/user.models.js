import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  //   username: String,
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: String,
  isActive: Boolean,
});

export const User = mongoose.model("User", userSchema); // in mongoose user converts to Users.
