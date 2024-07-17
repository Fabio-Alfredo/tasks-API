import jwt from "jsonwebtoken";
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;

export const sign = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET, { 
        expiresIn: '1h' 
    });
    return token;
}

export const verify = (token)=>{
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
}