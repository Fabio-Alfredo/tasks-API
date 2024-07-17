import { registerUser, loginUser } from '../service/auth.service.js'

export const register = async(req, res)=>{
    try{
        const response = await registerUser(req.body)
        res.send(response);
    }catch(err){
        throw err;
    }
}

export const login = async(req, res)=>{
    try {
        const response = await loginUser (req.body)
        res.send(response);
    }catch(err){
        throw err;
    }
}