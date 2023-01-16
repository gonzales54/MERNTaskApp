import express from 'express';
import UserController from '../controller/UserController';

const UserRouter = express.Router();

UserRouter.post('/signin', UserController.signin);
UserRouter.post('/signup', UserController.signup);
UserRouter.get('/:uid', UserController.show);
UserRouter.patch('/:uid', UserController.edit);
UserRouter.delete('/:uid', UserController.delete);

export default UserRouter;