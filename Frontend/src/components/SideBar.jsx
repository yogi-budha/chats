import { FaSearch } from "react-icons/fa";
import Friends from "./Friends";
import { useLogoutUserMutation } from "../redux/services/userApi";
import { useNavigate } from "react-router-dom";
import { useGetfriendsQuery } from "../redux/services/messageApi";
import { useState } from "react";




export default function Sidebar() {

  const [otherUserData, setOtherUserData] = useState({
    friends:''
  })
  const { data, error, isLoading } = useGetfriendsQuery();
  

  const newUser = data?.otherUser?.filter((user) => {
    if (user.fullname.toLowerCase().includes(otherUserData.friends.toLowerCase())) {
      return user;
    }
  });

  const [logout] = useLogoutUserMutation()

  const navigate = useNavigate()
  
  return (
    <div className="w-1/3 bg-slate-500 text-white p-4 overflow-y-auto ">
      <div className="w-full flex items-center justify-between p-4 gap-4 shadow-sm">
      <h1 className="text-3xl font-bold text-primary ">Chatify</h1>

      <div className="flex items-center gap-3 w-full max-w-xl relative">
        <input
          onChange={(e)=>{setOtherUserData({...otherUserData,friends:e.target.value})}}
          type="text"
          name="search"
          placeholder="Search..."
          className="input input-bordered w-full pl-10 text-base text-white placeholder:text-gray-500"
        />
        <FaSearch className="absolute left-3 text-gray-500" />
      </div>
    </div>
    <div className="min-h-full mt-4 relative">
      <Friends data={newUser} error={error} isLoading={isLoading}/>

      <button className="btn btn-primary w-full mt-4 absolute bottom-20" onClick={() => { logout() , localStorage.setItem("token",""),navigate("/login") }}>LogOut</button>
    </div>
    </div>
  );
}
