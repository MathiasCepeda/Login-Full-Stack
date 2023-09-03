import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
    getTasks, 
    getTask, 
    createTasks, 
    updateTasks, 
    deleteTasks
} from '../controllers/tasks.controller.js'
import { createTaskSchema } from '../schemas/task.chema.js';
import { validateSchema } from '../middlewares/validator.middleware.js';

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validateSchema(createTaskSchema) ,createTasks)
router.delete('/tasks', authRequired, updateTasks)
router.put('/tasks:id', authRequired, deleteTasks)

export default router

