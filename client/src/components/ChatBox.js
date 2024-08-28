import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Assuming the server is on localhost:5000

const ChatBox = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        socket.on('message', ({ user, message }) => {
            setChat((prevChat) => [...prevChat, { user, message }]);
        });
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            socket.emit('message', { user: 'User1', message });
            setMessage('');
        }
    };

    return (
        <div className="chat-box">
            <div className="chat-messages">
                {chat.map((entry, idx) => (
                    <div key={idx}><strong>{entry.user}: </strong>{entry.message}</div>
                ))}
            </div>
            <Form onSubmit={sendMessage} className="chat-input">
                <Form.Control
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                />
                <Button type="submit" variant="primary">
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default ChatBox;
