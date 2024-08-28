import React from 'react';
import { Form } from 'react-bootstrap';

const InputBox = ({ input, onInputChange }) => {
    return (
        <Form.Control
            as="textarea"
            rows={3}
            value={input}
            onChange={onInputChange}
            placeholder="Enter custom input here"
        />
    );
};

export default InputBox;
