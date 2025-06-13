import jwt from "jsonwebtoken"

export const isAuth = async(req,res,next)=>{
    try {
        const token = req.cookies
        if(!token){
            return req.status(400).json({"messge":"User is not authenticated"})

        }
       const decodedToken = await jwt.verify(token.token,process.env.JWT_SECREAT)
       if(!decodedToken){
            return res.status(400).json({"messge":"User is not authenticated"})
       }
       req.id = decodedToken.userId
        next()
        
    } catch (error) {
        console.log(error)
        
    }
} 