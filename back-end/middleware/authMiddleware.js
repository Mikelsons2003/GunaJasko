const jwt = require('jsonwebtoken');

// Middleware to check if the token is valid
const authMiddleware = (req, res, next) => {
    // Extract the token from the Authorization header (Bearer <token>)
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Remove 'Bearer ' prefix

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify the token using JWT_SECRET from environment variables
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded; // Attach the decoded token (user data) to the request object
        next(); // Continue to the next middleware/route handler
    });
};

module.exports = authMiddleware;
