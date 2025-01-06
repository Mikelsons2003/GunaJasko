const bcrypt = require('bcryptjs');
const pool = require('./db'); // Assuming db.js is in the same folder

// Define the admin user's email and password
const email = 'admin@example.com';
const password = 'password'; // Plain text password

async function createAdminUser() {
    try {
        // Check if the user already exists
        const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (result.length > 0) {
            console.log('Admin user already exists.');
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the admin user into the database
        await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

        console.log('Admin user created successfully.');
    } catch (error) {
        console.error('Error during admin user setup:', error);
    }
}

// Call the createAdminUser function and handle promise rejection
createAdminUser().catch((error) => {
    console.error('Error in the createAdminUser function:', error);
});
