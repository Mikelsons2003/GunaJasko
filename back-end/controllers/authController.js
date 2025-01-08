const bcrypt = require('bcryptjs');
const pool = require('../db');

// Middleware to authenticate the user (JWT removed)
const authenticate = (req, res, next) => {
    // Authentication bypassed since JWT is removed
    next();
};

// Login function without JWT
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (result.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const user = result[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Instead of generating a token, return a success message or user details
        res.json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { login, authenticate };

