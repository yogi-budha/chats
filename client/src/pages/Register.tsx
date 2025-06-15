import { Link } from 'react-router-dom';
import { useRegisterHookMutation } from '../redux/api/userApi';
import { useState } from 'react';

const Register: React.FC = () => {
    const [register,{isLoading,isSuccess,error}] =useRegisterHookMutation()
    console.log(register)

    const [userData,setUserData] = useState({
        fullname:"",
        username:"",
        password:"",
        conformpassword:"",
        gender:""
    })

const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
        ...userData,
        [e.target.name]:e.target.value
    })
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-2xl bg-white">
        <h1 className="text-3xl font-bold text-center text-primary">Register</h1>
        <form className="space-y-4">
          <input
          name='fullname'
          value={userData.fullname}
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
          />
          <input
           name='password'
          value={userData.password}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <input
           name='conformpassword'
          value={userData.conformpassword}
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            required
          />

          <div className="flex gap-4">
            <label className="label cursor-pointer">
              <input type="checkbox" name="gender" className="checkbox checkbox-primary" />
              <span className="ml-2">Male</span>
            </label>
            <label className="label cursor-pointer">
              <input type="checkbox" name="gender" className="checkbox checkbox-secondary" />
              <span className="ml-2">Female</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
