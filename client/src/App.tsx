
import { useEffect } from 'react';
import './App.css'
import { io } from "socket.io-client";

function App() {

  useEffect(()=>{
    const newSocket = io("http://localhost:8800",{
      transports:['websocket','polling']
    })

    newSocket.on("connect",()=>{
      console.log("Connecterd to socket.IO server",newSocket.id)
    })
  },[])

  return (

    <>

    <h1>Hello form Client</h1>
  
    </>
  )
}

export default App
