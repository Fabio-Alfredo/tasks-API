import { userModel } from "../models/user.model.js";
import { hashPassword } from "../utils/password.handle.js";

export const registerUser = async ({name, email, password}) => {
    const checkUser = await userModel.findOne({ email:email });
    if (checkUser) {
        return { error: "User already exists" };
    }
    const  pass= await hashPassword(password); 
    const newUser = await userModel.create({ name, email, password: pass });
    return newUser;
}


