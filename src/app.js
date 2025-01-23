const express = require('express');
const path = require('path');
const routes = require('./routes');

// Initialize the Express app
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Use the routes module for handling routes
app.use('/', routes);

module.exports = app;
