import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [sessionID, setSessionID] = useState('');
    const navigate = useNavigate();

    const handleJoinSession = () => {
        if (username && sessionID) {
            navigate(`/session/${sessionID}?username=${encodeURIComponent(username)}`);
        }
    };

    return (
        <div className="login-container">
            <h2>Join a Session</h2>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your name"
                    />
                </Form.Group>
                <Form.Group controlId="sessionID">
                    <Form.Label>Session ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={sessionID}
                        onChange={(e) => setSessionID(e.target.value)}
                        placeholder="Enter the session ID"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleJoinSession} className="mt-3">
                    Join Session
                </Button>
            </Form>
        </div>
    );
};

export default Login;
