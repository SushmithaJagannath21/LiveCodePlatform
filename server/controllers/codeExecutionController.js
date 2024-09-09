const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Helper function to get file extension based on the language
const getFileExtension = (language) => {
    switch (language) {
        case 'python':
            return 'py';
        case 'javascript':
            return 'js';
        case 'cpp':
            return 'cpp';
        default:
            return '';
    }
};

// Function to handle code execution
const executeCode = (req, res) => {
    const { language, code } = req.body;

    if (!code || !language) {
        return res.status(400).json({ error: 'Code and language are required.' });
    }

    // Choose the appropriate execution command based on the language
    let command = '';
    const fileName = `tempCode.${getFileExtension(language)}`;
    const filePath = path.join(__dirname, fileName);

    // Write the code to a temporary file
    try {
        fs.writeFileSync(filePath, code);
    } catch (err) {
        console.error('Failed to write file', err);
        return res.status(500).json({ error: 'Failed to write temporary file' });
    }

    // Determine the command for each language
    switch (language) {
        case 'python':
            command = `python3 ${filePath}`;
            break;
        case 'javascript':
            command = `node ${filePath}`;
            break;
        case 'cpp':
            const cppFilePath = path.join(__dirname, 'tempCode.cpp');
            fs.writeFileSync(cppFilePath, code);
            command = `g++ ${cppFilePath} -o ${path.join(__dirname, 'tempCode')} && ${path.join(__dirname, './tempCode')}`;
            break;
        default:
            return res.status(400).json({ error: 'Unsupported language' });
    }

    // Execute the code
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
        }

        if (stderr) {
            console.error(`Standard Error: ${stderr}`);
        }

        console.log(`Standard Output: ${stdout}`);

        // Remove the temp files
        fs.unlinkSync(filePath);
        if (language === 'cpp') {
            const compiledFile = 'tempCode';
            if (fs.existsSync(path.join(__dirname, compiledFile))) {
                fs.unlinkSync(path.join(__dirname, compiledFile));  // Delete the C++ executable
            }
        }

        if (error || stderr) {
            return res.status(500).json({ error: stderr || error.message });
        }

        return res.json({ output: stdout });
    });
};

module.exports = { executeCode };
