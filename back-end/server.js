const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
// Routes
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const propertyRoutes = require('./routes/propertyRoutes'); // Property management routes

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: true, // Allow all origins
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true, // Include credentials for cross-origin requests
}));
app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Parse JSON bodies

// API Routes - Handle API routes first
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

// Serve static files for React app from the public_html folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploads folder
app.use(express.static(path.join(__dirname, '../public_html'))); // Adjust to the public_html location

// Handle unmatched API routes explicitly (Not found)
app.use('/api/*', (req, res) => {
    res.status(404).json({message: 'API route not found'});
});

// Fallback route for React app (catch-all for non-API requests)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public_html', 'index.html')); // Serve index.html from public_html
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