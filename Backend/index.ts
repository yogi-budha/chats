import express from 'express'
import {createServer} from "http"
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()

app.use(cors())

const httpServer = createServer(app)

let io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:5173",
        methods:['GET',"POST"]
    }
})

io.on("connection",(socket)=>{
    console.log('A user connected:',socket.id)
})


app.get("/",(req,res)=>{
    res.send("server running successfully")
})
app.listen("8800",()=>{
    console.log("Server running on the port 8800")
})