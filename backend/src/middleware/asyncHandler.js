
export const AsyncHandler = (handler)=>{
    return async(req,res,next)=>{
        try {
            await handler(req,res,next);
        } catch (error) {
            console.log('Async Hanlder Error : ',error.message);
            res.status(500).json({
                message:"Async Handler Error : "+error.message
            });
            return;
        }
    }
}