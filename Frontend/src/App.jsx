import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"



function App() {

  const token = localStorage.getItem("token");

  

  return (
    <>
      <Routes>
        <Route path="/" element={token=="undefined"||token===null?<Login/>:<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
