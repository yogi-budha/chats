import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import userRoute from  './routes/user.routes.js'
import DBconnect from './config/DBconnect.js'
import messageRoute from './routes/message.routes.js'
import cors from "cors"

const app = express()

const targetCors = {
    origin:"http://localhost:5173"
}




const PORT = process.env.PORT || 5500

// middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}))

app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

app.get("/",(req,res)=>{
    res.status("200").json({message:"Server is running goood"})
})

app.listen(PORT,()=>{
    DBconnect()
    console.log(`server is running at the port ${PORT}`)
})