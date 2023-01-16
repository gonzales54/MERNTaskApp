import mongoose from "mongoose";

const { Schema, model } = mongoose;

const TaskSchema = new Schema(
  {
    authorId: String,
    authorName: String,
    taskName: String,
    taskContent: String,
    deadLine: Date,
    status: String,
    createdAt: Date,
    updatedAt: Date,
  }, 
  {
    versionKey: false
  }
);

const Task = model('Task', TaskSchema);
export default Task;