import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'

const app = express()


const PORT = process.env.PORT || 5500

// middlewares
app.use(cookieParser())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status("200").json({message:"Server is running goood"})
})

app.listen(PORT,()=>{
    console.log(`server is running at the port ${PORT}`)
})