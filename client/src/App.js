import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import LanguageSelector from './components/LanguageSelector';
import RunButton from './components/RunButton';
import InputBox from './components/InputBox';
import OutputWindow from './components/OutputWindow';
import ChatBox from './components/ChatBox';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="app-container">
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
}

export default App;
