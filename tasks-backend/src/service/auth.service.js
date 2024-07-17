import { userModel } from "../models/user.model.js";
import { hashPassword, comparePassword  } from "../utils/password.handle.js";
import {sign} from '../utils/jwt.handle.js';
import { httpError } from "../utils/error.handle.js";

export const registerUser = async ({name, email, password}) => {
    const checkUser = await userModel.findOne({ email:email });

    if (checkUser) throw new httpError("User already exists", 400);

    const  pass= await hashPassword(password); 
    const newUser = await userModel.create({ name, email, password: pass });
    return newUser;
}

export const loginUser = async ({email, password})=>{
    
    const checkUser = await userModel.findOne({ email });
    if (!checkUser) throw new httpError("Invalid credentials", 401);

    const isCorrect = await comparePassword(password, checkUser.password);
    if (!isCorrect) throw new httpError("Invalid credentials", 401);

    const token = sign({ email: checkUser.email });
    return { token };
}


