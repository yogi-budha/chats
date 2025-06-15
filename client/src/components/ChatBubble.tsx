import React from 'react';

interface ChatBubbleProps {
  text: string;
  sender: 'me' | 'other';
  time: string;
}

export default function ChatBubble({ text, sender, time }: ChatBubbleProps){
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