import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:4000', {
  transports: ['websocket']
});

function Chat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });

    socket.on('receive_message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const msg = { text: message };
      socket.emit('send_message', msg);
      setChat((prev) => [...prev, msg]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h2>💬 Real-Time Chat</h2>
      <div className="chat-box">
        {chat.map((msg, idx) => (
          <div key={idx} className="chat-message">{msg.text}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
