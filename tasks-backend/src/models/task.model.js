import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["pending", "completed", "in-progress"],
        default: "pending"
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
})

const taskModel = model("Task", taskSchema);
export { taskModel }