import { verify } from "../utils/jwt.handle.js";
import { taskModel } from "../models/task.model.js";
import { httpError } from "../utils/error.handle.js";

export const createTask = async({ title, description }, token) => {

    if (!token) throw new httpError("Unauthorized", 401);

    const { id } = verify(token);
    const task = await taskModel.create({ title, description, user: id });
    return task;
}

export const getTasks = async(token)=>{
    if (!token) throw new httpError("Unauthorized", 401);

    const { id } = verify(token);
    const tasks = await taskModel.find({ user: id });
    return tasks;
}