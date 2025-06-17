import Sidebar from '../components/SideBar'
import ChatWindow from '../components/ChatWindow'

const Home = () => {
  return (
      <div className="flex h-screen bg-[#EDE9FE]">
      <Sidebar />
      <ChatWindow />
    </div>
  )
}

export default Home