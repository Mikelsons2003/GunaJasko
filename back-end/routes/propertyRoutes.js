const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for properties
router.get('/', authMiddleware, propertyController.getAllProperties);
router.post('/', authMiddleware, uploadMiddleware, propertyController.addProperty);
router.put('/:id', authMiddleware, uploadMiddleware, propertyController.updateProperty);
router.delete('/:id', authMiddleware, propertyController.deleteProperty);
router.get('/:id', authMiddleware, propertyController.getPropertyById);

module.exports = router;