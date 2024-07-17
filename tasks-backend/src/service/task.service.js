import { verify } from "../utils/jwt.handle.js";
import { taskModel } from "../models/task.model.js";
import { httpError } from "../utils/error.handle.js";

export const createTask = async({ title, description }, token) => {

    if (!token) throw new httpError("Unauthorized", 401);

    const { _id } = verify(token);
    const task = await taskModel.create({ title, description, user: _id });
    return task;
}