
const express = require('express');

const app = express();

app.get('/messages', (req, res) => {
    const messages = ["Message 1", "Message 2", "Message 3"];
    res.json(messages);
    
    });

app.listen(3001, () => {
    console.log('API server running on port 3001');
        
    });