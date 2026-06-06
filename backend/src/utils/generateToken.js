import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';


export const generateAccessToken = (payload)=>{
    return jwt.sign({user:payload},process.env.JWT_ACCESS_TOKEN,{expiresIn:process.env.JWT_ACCESS_TOKEN_VALIDITY});
}

export const generateRefreshToken = (payload)=>{
    return jwt.sign({user:payload},process.env.JWT_REFRESH_TOKEN,{expiresIn:process.env.JWT_REFRESH_TOKEN_VALIDITY});
}