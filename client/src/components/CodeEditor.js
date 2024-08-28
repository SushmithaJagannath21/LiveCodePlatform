import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ code, language, onChange }) => {
    const options = {
        selectOnLineNumbers: true,
    };

    return (
        <MonacoEditor
            width="800"
            height="600"
            language={language}
            theme="vs-dark"
            value={code}
            options={options}
            onChange={onChange}
        />
    );
};

export default CodeEditor;
