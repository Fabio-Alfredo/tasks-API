import {createTaskController} from '../controller/task.controller.js';
import {Router} from 'express';

const router = Router();

router.post('/new', createTaskController);

export {router};