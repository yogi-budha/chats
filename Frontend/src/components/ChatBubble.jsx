import React from 'react';


export default function ChatBubble({ text, sender, createdAt }){

  const data = new Date(createdAt)

  const time = data.toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit",
    hour12:true
  })
  
  const isMe = sender === 'me';
  return (
    <div className={`flex ${isMe ? 'justify-start' : 'justify-end'}`}>
      <div className="max-w-xs">
        <div className={`p-3 rounded-xl ${isMe ? 'bg-[#CDB4DB]' : 'bg-[#FDE2E4]'} text-sm`}>{text}</div>
        <p className="text-xs text-right mt-1 text-gray-500">{time}</p>
      </div>
    </div>
  );
}