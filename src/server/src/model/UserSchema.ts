import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
     uid: String,
     name: String,
     taskCount: Number,
     tasks: {
      type: [String]
     },
     createdAt: Date,
     updatedAt: Date,
  }, 
  {
    versionKey: false
  }
);

const User = model('User', UserSchema);
export default User;