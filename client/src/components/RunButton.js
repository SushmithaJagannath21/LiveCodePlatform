import React from 'react';
import axios from 'axios';

const RunButton = ({ code, language, input, setOutput }) => {
    const handleRunCode = () => {
        axios
            .post('http://localhost:5001/api/code-execution', {
                code: code,
                language: language,
                input: input
            })
            .then((response) => {
                setOutput(response.data.output);
            })
            .catch((error) => {
                setOutput(error.response ? error.response.data.error : 'Error executing code');
            });
    };

    return (
        <button onClick={handleRunCode} className="btn btn-primary">
            Run Code
        </button>
    );
};

export default RunButton;
