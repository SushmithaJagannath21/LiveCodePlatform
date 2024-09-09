const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const codeExecutionRoutes = require('./routes/codeExecutionRoutes');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/code-execution', codeExecutionRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
