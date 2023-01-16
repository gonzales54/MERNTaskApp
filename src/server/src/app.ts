import express from "express";
import TaskRouter from "./route/TaskRoute";
import UserRouter from "./route/UserRoute";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/users', UserRouter);
app.use('/tasks', TaskRouter);

export default app;
