// Import necessary modules
const express = require('express'); // Import the Express framework
const path = require('path');       // Built-in Node.js module for handling file paths

// Initialize the app
const app = express();

// Set the port number
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js server! 🚀');
});

// API route example
app.get('/api/data', (req, res) => {
    const sampleData = {
        id: 1,
        name: 'John Doe',
        message: 'Hello from the API!'
    };
    res.json(sampleData);
});

// Dynamic route example
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! Welcome to the Node.js server!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
