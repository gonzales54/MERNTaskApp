import express from 'express';
import TaskController from '../controller/TaskController';

const TaskRouter = express.Router();

TaskRouter.get('/', TaskController.index);
TaskRouter.get('/:id', TaskController.show);
TaskRouter.post('/:id', TaskController.store);
TaskRouter.patch('/:id', TaskController.edit);
TaskRouter.delete('/:id', TaskController.delete);

export default TaskRouter;