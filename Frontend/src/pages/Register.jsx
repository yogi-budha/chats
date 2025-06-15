import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../redux/services/userApi";
import toast from "react-hot-toast";

function Register() {
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    password: "",
    conformpassword: "",
    gender: "",
  });
  const navigate = useNavigate()

  const [createUser] = useCreateUserMutation();

  const onSubmithandler = async (e) => {
    e.preventDefault();
    const res = await createUser(userData);
    try {
      toast.success(res.data.message);
      navigate("/login")
    } catch (error) {
      console.log(error);
      toast.error(res.error.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-2xl bg-white">
        <h1 className="text-3xl font-bold text-center text-primary">
          Register
        </h1>
        <form className="space-y-4 " onSubmit={onSubmithandler}>
          <input
            name="fullname"
            value={userData.fullname}
            onChange={(e) =>
              setUserData(() => ({ ...userData, fullname: e.target.value }))
            }
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="username"
            value={userData.username}
            onChange={(e) =>
              setUserData(() => ({ ...userData, username: e.target.value }))
            }
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
          />
          <input
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData(() => ({ ...userData, password: e.target.value }))
            }
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <input
            name="conformpassword"
            value={userData.conformpassword}
            onChange={(e) =>
              setUserData(() => ({
                ...userData,
                conformpassword: e.target.value,
              }))
            }
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            required
          />

          <div className="flex gap-4 text-black">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="gender"
                className="checkbox checkbox-primary"
                onClick={() =>
                  setUserData(() => ({ ...userData, gender: "male" }))
                }
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="gender"
                className="checkbox checkbox-secondary"
                onClick={() =>
                  setUserData(() => ({ ...userData, gender: "female" }))
                }
              />
              <span className="ml-2">Female</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>

          <div className="text-center">
            <p className="text-sm text-black">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
