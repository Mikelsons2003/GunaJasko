const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // CORS middleware
const propertyRoutes = require('./routes/propertyRoutes'); // Import property routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const pool = require('./db'); // Import database connection
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    allowedHeaders: ['Authorization', 'Content-Type'], // Allow Authorization header
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
}));

app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/properties', propertyRoutes); // Use property routes for /api/properties
app.use('/api/auth', authRoutes); // Use auth routes for /api/auth
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Test database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Database connected successfully!');
        connection.release(); // Release the connection back to the pool
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});