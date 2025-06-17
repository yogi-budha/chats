
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/slice/userSlice';

function OtherUser({ _id, fullname, profilePic, username }) {
    
  const id = useSelector((state)=>state?.user?.selectedUser?._id)
const  dispatch = useDispatch();



   
  return (
      <div
          key={_id}
          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-slate-600 ${id === _id ? "bg-slate-600" : "" } `}
          onClick={() => dispatch(setSelectedUser({ _id, fullname, profilePic, username }) )}
        >
          <div className="flex items-center gap-3">
            <div className="avatar avatar-online">
              <div className="w-10 rounded-full">
                <img src={profilePic} alt={fullname} />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-sm">{username}</h2>
              {/* <p className="text-xs opacity-70">{user.msg}</p> */}
            </div>
          </div>
          {/* <span className="text-xs opacity-60">{user.time}</span> */}
        </div>
  )
}

export default OtherUser