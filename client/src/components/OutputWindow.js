import React from 'react';

const OutputWindow = ({ output }) => {
    return (
        <div className="output-window">
            <h3>Output</h3>
            <textarea
                readOnly
                value={output}
                rows={10}
                style={{ width: '100%', fontFamily: 'monospace', padding: '10px' }}
            />
        </div>
    );
};

export default OutputWindow;
