import { userModel } from "../models/user.model.js";
import { hashPassword, comparePassword  } from "../utils/password.handle.js";
import {sign} from '../utils/jwt.handle.js';

export const registerUser = async ({name, email, password}) => {
    const checkUser = await userModel.findOne({ email:email });
    if (checkUser) {
        return { error: "User already exists" };
    }
    const  pass= await hashPassword(password); 
    const newUser = await userModel.create({ name, email, password: pass });
    return newUser;
}

export const loginUser = async ({email, password})=>{
    
    const checkUser = await userModel.findOne({ email });
    if (!checkUser) return { error: "User not found" };

    const isCorrect = await comparePassword(password, checkUser.password);
    if (!isCorrect) return { error: "Invalid credentials" };

    const token = sign({ email: checkUser.email });
    return { token };
}


