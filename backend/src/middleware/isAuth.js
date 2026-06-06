import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const isAuth = (req,res,next)=>{
    try {
       const headerAuth = req.headers.authorization;
       if(!headerAuth || !headerAuth.startsWith('Bearer ')){
        return res.status(400).json({
            message:"Not Authorized",
            success:false
        });
       }

       const decodeToken = headerAuth.split(' ')[1];
       if(!decodeToken){
            return res.status(404).json({
                message:"Token missing.",
                success:false
            });
       }
       
       const decodeVal = jwt.verify(decodeToken,process.env.JWT_ACCESS_TOKEN);
       if(!decodeVal){
            return res.status(404).json({
                message:"Invalid token .",
                success:false
            });
       }
       req.user = decodeVal.user;
       next();
    } catch (error) {
        res.status(503).json({
            message:"Server not available.",
            success:false
        });
        return;
    }
}

export const isAllowedRole = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message:"Not allow to access.",
                success:false
            });
        }
        next();
    }
}