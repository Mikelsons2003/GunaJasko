const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();
const cors = require('cors');
const path = require('path');
const pool = require('./db'); // Import database connection

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['https://guna.lucid-websites.com', 'http://localhost:3000'], // Allowed origins
    allowedHeaders: ['Authorization', 'Content-Type'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true, // Include credentials for cross-origin requests
}));

app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploads folder

// Routes
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const propertyRoutes = require('./routes/propertyRoutes'); // Property management routes

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

// Test database connection endpoint
app.get('/test-db-connection', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({message: 'Error connecting to the database', error: err.message});
        }
        connection.query('SELECT 1', (error, results) => {
            connection.release();
            if (error) {
                return res.status(500).json({message: 'Error executing query', error: error.message});
            }
            res.status(200).json({message: 'Database connection successful', results});
        });
    });
});

// Serve static files for React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Handle unmatched API routes explicitly
app.use('/api/*', (req, res) => {
    res.status(404).json({message: 'API route not found'});
});

// Fallback route for React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// General error-handling middleware
app.use((err, req, res, next) => {
    console.error('Internal Server Error:', err);
    res.status(500).json({message: 'Internal Server Error'});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});