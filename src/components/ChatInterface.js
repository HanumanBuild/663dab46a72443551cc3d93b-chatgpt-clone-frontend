import React, { useState } from 'react';
import axios from 'axios';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/messages`, { text: input });
      setMessages([...messages, { text: input, isUser: true }, { text: response.data.message, isUser: false }]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index} className={msg.isUser ? 'user-msg' : 'bot-msg'}>{msg.text}</p>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInterface;