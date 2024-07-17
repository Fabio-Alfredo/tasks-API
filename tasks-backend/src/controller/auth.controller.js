import { registerUser, loginUser } from '../service/auth.service.js'
import { handleHttpError } from '../utils/error.handle.js';

export const register = async(req, res)=>{
    try{
        const response = await registerUser(req.body)
        res.send(response);
    }catch(err){
        console.log(err);
        handleHttpError(res, "User already exists", err);
    }
}

export const login = async(req, res)=>{
    try {
        const response = await loginUser (req.body)
        res.send(response);
    }catch(err){
        console.log( err);
        handleHttpError(res, err.message, err);
    }
}