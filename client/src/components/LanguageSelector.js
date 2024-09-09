import React from 'react';
import { Form } from 'react-bootstrap';

const LanguageSelector = ({ selectedLanguage, onSelectLanguage }) => {
    return (
        <Form.Select value={selectedLanguage} onChange={onSelectLanguage}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
        </Form.Select>
    );
};

export default LanguageSelector;
