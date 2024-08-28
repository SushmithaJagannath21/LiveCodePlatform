import React from 'react';
import { Button } from 'react-bootstrap';

const RunButton = ({ onRun }) => {
    return (
        <Button variant="primary" onClick={onRun}>
            Run Code
        </Button>
    );
};

export default RunButton;
