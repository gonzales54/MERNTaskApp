import express from 'express';
import Task from '../model/TaskSchema';

class TaskController {
  static index(req: express.Request, res: express.Response) {
    const tasks = Task.find();
    res.status(200).json({'tasks': tasks});
  }

  static show(req: express.Request, res: express.Response) {
    const task = Task.find({_id: req.params._id});
    res.status(200).json({'task': task});
  }

  static store(req: express.Request, res: express.Response) {

  }

  static edit(req: express.Request, res: express.Response) {

  }

  static delete(req: express.Request, res: express.Response) {

  }
}

export default TaskController;