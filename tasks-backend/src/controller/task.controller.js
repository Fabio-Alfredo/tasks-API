import { createTask, getTasks } from '../service/task.service.js';
import { handleHttpError } from '../utils/error.handle.js';

export const createTaskController = async (req, res) => {
    try {
        const auth = req.headers.authorization || "";
        const token = auth.split(" ").pop();
        
        const response = await createTask(req.body, token);
        res.send(response);

    } catch (err) {
        handleHttpError(res, err.message, err);
    }
}

export const getTasksController = async (req, res)=>{
    try{
        const auth = req.headers.authorization || "";
        const token = auth.split(" ").pop();

        const response = await getTasks(token);
        res.send(response);

    }catch(err){
        handleHttpError(res, err.message, err);
    }
}
