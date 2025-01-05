const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes'); // Import property routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const pool = require('./db'); // Import database connection
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(cors({
    origin: ['https://guna.lucid-websites.com', 'http://localhost:3000'],  // Add localhost for local development
    allowedHeaders: ['Authorization', 'Content-Type'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
}));

app.use(express.json());

// Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/auth', authRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});