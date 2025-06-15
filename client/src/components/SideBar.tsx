import { FaSearch } from "react-icons/fa";

const users = [
  { name: 'John Faustino', time: '52m', msg: 'Aliqua PageMaker...', active: false },
  { name: 'Cassia Tofano', time: '45m', msg: 'There are many variations...', active: true },
  { name: 'Youtong Lee', time: '30m', msg: 'But the majority have...', active: false },
  { name: 'Scale Gong', time: 'Now', msg: 'The standard chunk of...', active: true },
  { name: 'John Faustino Home', time: '25m', msg: 'All the Lorem Ipsum...', active: false },
  { name: 'Tom Smit', time: '15m', msg: 'Contrary to popular...', active: true },
];

export default function Sidebar() {
  return (
    <div className="w-1/3 bg-slate-500 text-white p-4 overflow-y-auto ">
      <div className="w-full flex items-center justify-between p-4 gap-4 shadow-sm">
      <h1 className="text-3xl font-bold text-primary ">Chatify</h1>

      <div className="flex items-center gap-3 w-full max-w-xl relative">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="input input-bordered w-full pl-10 text-base text-black placeholder:text-gray-500"
        />
        <FaSearch className="absolute left-3 text-gray-500" />
      </div>
    </div>
      <div className="space-y-3">
        {users.map((user, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
              user.active ? 'bg-[#F72585] text-white' : 'hover:bg-[#5A189A]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="avatar avatar-online">
                <div className="w-10 rounded-full">
                  <img src={`https://i.pravatar.cc/150?img=${i + 1}`} alt={user.name} />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-sm">{user.name}</h2>
                <p className="text-xs opacity-70">{user.msg}</p>
              </div>
            </div>
            <span className="text-xs opacity-60">{user.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
