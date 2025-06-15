import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/services/userApi';
import toast from 'react-hot-toast';

function Login() {
      const [userData,setUserData] = useState({
        username:"",password:""
      })
  
  const navigate = useNavigate()

  const [loginUser] = useLoginUserMutation();

  const onSubmithandler = async (e) => {
    e.preventDefault();
    const res = await loginUser(userData);
    try {
      toast.success(res?.data?.message);
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error(res?.error?.data?.message);
    }
  };

 return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-2xl bg-white">
        <h1 className="text-3xl font-bold text-center text-primary">Register</h1>
        <form className="space-y-4 " onSubmit={onSubmithandler}>
          
          <input
          
          name='username'
          value={userData.username}
          onChange={(e)=>setUserData(()=>({...userData,username:e.target.value}))}
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
          />
          <input
           name='password'
          value={userData.password}
          
          onChange={(e)=>setUserData(()=>({...userData,password:e.target.value}))}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
         
         

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>

          <div className="text-center">
            <p className="text-sm text-black">
             Don't have an account?
              <Link to="/register" className="text-blue-500 hover:underline">
               create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login