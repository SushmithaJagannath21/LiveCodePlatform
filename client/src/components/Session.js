import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import LanguageSelector from './LanguageSelector';
import RunButton from './RunButton';
import InputBox from './InputBox';
import OutputWindow from './OutputWindow';
import ChatBox from './ChatBox';

const Session = () => {
    const [code, setCode] = useState('');          // Stores the user-written code
    const [language, setLanguage] = useState('javascript');  // Stores the selected language
    const [input, setInput] = useState('');        // Stores custom input for code execution
    const [output, setOutput] = useState('');      // Stores the output of code execution

    return (
        <div className="session-container">
            <div className="editor-container">
                <h1>Collaborative Code Editor</h1>
                <LanguageSelector selectedLanguage={language} onSelectLanguage={(e) => setLanguage(e.target.value)} />
                <CodeEditor code={code} language={language} onChange={setCode} />
                <InputBox input={input} onInputChange={(e) => setInput(e.target.value)} />
                <RunButton code={code} language={language} input={input} setOutput={setOutput} />
                <OutputWindow output={output} />
            </div>
            <div className="chat-container">
                <ChatBox />
            </div>
        </div>
    );
};

export default Session;
