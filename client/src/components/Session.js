import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CodeEditor from './CodeEditor';
import LanguageSelector from './LanguageSelector';
import RunButton from './RunButton';
import InputBox from './InputBox';
import OutputWindow from './OutputWindow';
import ChatBox from './ChatBox';
import '../App.css';  // Import the CSS file

const Session = () => {
    const { sessionID } = useParams();
    const query = new URLSearchParams(useLocation().search);
    const username = query.get('username');

    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleRunCode = () => {
        setOutput('Running code...');
    };

    return (
        <div className="app-container">
            <div className="editor-container">
                <h1>Session: {sessionID}</h1>
                <h2>Welcome, {username}</h2>
                <LanguageSelector selectedLanguage={language} onSelectLanguage={(e) => setLanguage(e.target.value)} />
                <CodeEditor code={code} language={language} onChange={setCode} />
                <InputBox input={input} onInputChange={(e) => setInput(e.target.value)} />
                <RunButton onRun={handleRunCode} />
                <OutputWindow output={output} />
            </div>
            <div className="chat-container">
                <ChatBox />
            </div>
        </div>
    );
};

export default Session;
