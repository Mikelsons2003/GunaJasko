const propertyController = require('../controllers/propertyController');
const express = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Routes for properties
router.get('/', propertyController.getAllProperties);
router.post('/', authMiddleware, uploadMiddleware, propertyController.addProperty);
router.put('/:id', authMiddleware, uploadMiddleware, propertyController.updateProperty);
router.delete('/:id', authMiddleware, propertyController.deleteProperty);
router.get('/:id', propertyController.getPropertyById);

module.exports = router;