const {query } = require('../db');
const bcrypt = require('bcryptjs');

// Get admin by email
const getAdminByEmail = async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const result = await query(sql, [email]);
    return result[0];
};

// Compare password with hash
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = { getAdminByEmail, comparePassword };

