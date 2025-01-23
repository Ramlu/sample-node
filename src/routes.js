const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.send('Welcome to the Node.js server! 🚀');
});

// API route example
router.get('/api/data', (req, res) => {
    const sampleData = {
        id: 1,
        name: 'John Doe',
        message: 'Hello from the API!'
    };
    res.json(sampleData);
});

// Dynamic route example
router.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! Welcome to the Node.js server!`);
});

module.exports = router;
