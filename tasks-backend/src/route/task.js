import {createTaskController, getTasksController} from '../controller/task.controller.js';
import {Router} from 'express';

const router = Router();

router.post('/new', createTaskController);
router.get('/', getTasksController)

export {router};