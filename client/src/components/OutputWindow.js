import React from 'react';
import { Form } from 'react-bootstrap';

const OutputWindow = ({ output }) => {
    return (
        <Form.Control
            as="textarea"
            rows={6}
            readOnly
            value={output}
            placeholder="Output will be displayed here"
        />
    );
};

export default OutputWindow;
