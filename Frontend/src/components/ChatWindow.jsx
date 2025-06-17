
import { useSelector } from 'react-redux';
import { useGetUserMessageQuery, useSendMessageMutation } from '../redux/services/messageApi';
import ChatBubble from './ChatBubble';

import { IoSendSharp } from "react-icons/io5";
import { useState } from 'react';


export default function ChatWindow() {

  const [message,setMessage] = useState({message:""})

  const id = useSelector((state)=>state?.user?.selectedUser?._id)

  const {data,isError,isLoading} = useGetUserMessageQuery(id,{
    skip: !id, 
  })

  const [sendmessage]=useSendMessageMutation(id)

  if(isError) return "An error has occured"
  if(isLoading) return "Loading..."

  const sendMessagehandler = ()=>{
    const data ={
      id,
      message
    }
    sendmessage(data)
    setMessage({message:""})
  }
  
  return (
    <div className="w-2/3 bg-white p-6 flex flex-col justify-between">
      <div className="space-y-4 overflow-y-auto">
        {data?.getMessagesAll?.map(({message,senderId,createdAt}, idx) => (
          <ChatBubble key={idx} text={message} sender={senderId === id ? 'me' : 'other'} createdAt={createdAt} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <input
          name="message"
          value={message.message}
          onChange={(e)=>setMessage({message:e.target.value})}
          type="text"
          placeholder="Type something..."
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary " onClick={sendMessagehandler}>Send<IoSendSharp/></button>
      </div>
    </div>
  );
}
