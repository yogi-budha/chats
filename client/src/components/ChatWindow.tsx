
import ChatBubble from './ChatBubble';

import { IoSendSharp } from "react-icons/io5";

interface Message {
  text: string;
  sender: 'me' | 'other';
  time: string;
}

const messages: Message[] = [
  { text: 'To take a trivial example', sender: 'me', time: '12:58' },
  { text: 'Which of us ever undertakes lab...', sender: 'other', time: '13:21' },
  { text: 'But I must explain to you how all this mistaken idea', sender: 'me', time: '13:25' },
  { text: 'The generated Lorem Ipsum is therefore always free from repetition', sender: 'other', time: '13:38' },
];

export default function ChatWindow() {
  return (
    <div className="w-2/3 bg-white p-6 flex flex-col justify-between">
      <div className="space-y-4 overflow-y-auto">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} text={msg.text} sender={msg.sender} time={msg.time} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Type something..."
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary ">Send<IoSendSharp/></button>
      </div>
    </div>
  );
}
