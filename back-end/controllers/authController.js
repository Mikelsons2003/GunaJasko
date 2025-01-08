const bcrypt = require("bcryptjs");
const pool = require("../db");
const jwt = require("jsonwebtoken");

// Middleware to authenticate the user using JWT token
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from 'Bearer <token>'
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded; // Attach decoded token to the request object
    next(); // Continue to the next middleware/route handler
  });
};

// Login function to generate a token after successful login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Log incoming login attempt
    console.log(`Attempting login with email: ${email}`);

    // Query to find the user by email
    const [result] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    // If no user is found
    if (result.length === 0) {
      console.log(`Login failed: Invalid email (${email})`);
      return res
        .status(400)
        .json({ message: "Invalid email or password. Please try again." });
    }

    const user = result[0];

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // If the password does not match
    // if (!isMatch) {
    //   console.log(`Login failed: Invalid password for email: ${email}`);
    //   return res
    //     .status(400)
    //     .json({ message: "Invalid email or password. Please try again." });
    // }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log(`Login successful for email: ${email}. Token generated.`);

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      message: "Server error. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = { login, authenticate };
