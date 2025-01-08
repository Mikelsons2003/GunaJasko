// Middleware to bypass token validation
const authMiddleware = (req, res, next) => {
    // Authentication bypassed, simply proceed to the next middleware
    next();
};

module.exports = authMiddleware;
