const propertyModel = require('../models/propertyModel');
require('../models/propertyImageModel');
const fs = require('fs');
const path = require('path');
const pool = require('../db'); // Import database connection

// Get all properties
const getAllProperties = async (req, res) => {
    try {
        const properties = await propertyModel.getAllProperties();
        res.json(properties);
    } catch (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({message: 'Error fetching properties', error: error.message});
    }
};

// Add a new property
const addProperty = async (req, res) => {
    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();

        const propertyData = {
            title: req.body.title,
            titleEng: req.body.titleEng,
            titleRu: req.body.titleRu,
            description: req.body.description,
            descriptionEng: req.body.descriptionEng,
            descriptionRu: req.body.descriptionRu,
            price: req.body.price,
            category: req.body.category,
            transactionType: req.body.transactionType,
            address: req.body.address,
            size: req.body.size,
            roomCount: req.body.roomCount,
            floor: req.body.floor,
        };

        // Insert the property
        const [propertyResult] = await connection.query(
            `INSERT INTO properties
             (title, titleEng, titleRu, category, transactionType, price, address, size, roomCount, floor,
              description, descriptionEng, descriptionRu, createdAt, updatedAt)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
            [
                propertyData.title, propertyData.titleEng, propertyData.titleRu, propertyData.category, propertyData.transactionType,
                propertyData.price, propertyData.address, propertyData.size, propertyData.roomCount, propertyData.floor,
                propertyData.description, propertyData.descriptionEng, propertyData.descriptionRu
            ]
        );

        const propertyId = propertyResult.insertId;
        console.log('Property added successfully with ID:', propertyId);

        // Process main image
        if (req.body.mainImage) {
            await connection.query(
                `UPDATE properties
                 SET mainImage = ?
                 WHERE id = ?`,
                [req.body.mainImage, propertyId]
            );
            console.log('Main image updated:', req.body.mainImage);
        }

        // Process collage images
        if (req.body.collageImages && req.body.collageImages.length > 0) {
            for (const imagePath of req.body.collageImages) {
                await connection.query(
                    `INSERT INTO property_images (property_id, image_path, created_at, updated_at)
                     VALUES (?, ?, NOW(), NOW())`,
                    [propertyId, imagePath]
                );
                console.log('Collage image inserted:', imagePath);
            }
        }

        await connection.commit();

        res.status(201).json({
            message: 'Property added successfully',
            property: {id: propertyId, ...propertyData},
        });
    } catch (error) {
        await connection.rollback();
        console.error('Error adding property:', error);
        res.status(500).json({error: 'Failed to add property'});
    } finally {
        connection.release();
    }
};

// Update an existing property
const updateProperty = async (req, res) => {
    const connection = await pool.getConnection();

    try {
        const { id } = req.params;
        const propertyData = req.body;

        // Start a transaction
        await connection.beginTransaction();

        // Update the main property table
        const updatePropertyQuery = `
            UPDATE properties
            SET 
                title = ?, titleEng = ?, titleRu = ?, category = ?, transactionType = ?, price = ?,
                address = ?, size = ?, roomCount = ?, floor = ?, description = ?, 
                descriptionEng = ?, descriptionRu = ?, updatedAt = NOW()
            WHERE id = ?`;
        const updatePropertyValues = [
            propertyData.title, propertyData.titleEng, propertyData.titleRu, propertyData.category,
            propertyData.transactionType, propertyData.price, propertyData.address,
            propertyData.size, propertyData.roomCount, propertyData.floor,
            propertyData.description, propertyData.descriptionEng, propertyData.descriptionRu, id
        ];

        await connection.query(updatePropertyQuery, updatePropertyValues);

        // Update the main image if provided
        if (propertyData.mainImage) {
            const updateMainImageQuery = `
                UPDATE properties
                SET mainImage = ?
                WHERE id = ?`;
            await connection.query(updateMainImageQuery, [propertyData.mainImage, id]);
        }

        // Handle collage images
        if (propertyData.collageImages) {
            // Delete existing collage images for this property
            const deleteCollageImagesQuery = `
                DELETE FROM property_images
                WHERE property_id = ?`;
            await connection.query(deleteCollageImagesQuery, [id]);

            // Insert the new collage images
            const insertCollageImageQuery = `
                INSERT INTO property_images (property_id, image_path, created_at, updated_at)
                VALUES (?, ?, NOW(), NOW())`;

            for (const imagePath of propertyData.collageImages) {
                await connection.query(insertCollageImageQuery, [id, imagePath]);
            }
        }

        // Commit the transaction
        await connection.commit();

        res.json({ message: 'Property updated successfully' });
    } catch (err) {
        await connection.rollback();
        console.error('Error updating property:', err);
        res.status(500).json({ message: 'Error updating property', error: err.message });
    } finally {
        connection.release();
    }
};


// Delete a property
const deleteProperty = async (req, res) => {
    try {
        const {id} = req.params;

        // Fetch the property by ID
        const property = await propertyModel.getPropertyById(id);
        if (!property) {
            return res.status(404).json({message: 'Property not found'});
        }

        // Remove the main image
        if (property.mainImage) {
            const mainImagePath = path.join(__dirname, '..', property.mainImage);
            if (fs.existsSync(mainImagePath)) {
                fs.unlink(mainImagePath, (err) => {
                    if (err) console.error('Error removing main image:', err);
                });
            }
        }

        // Remove collage images
        if (property.collageImages) {
            const collageImages = JSON.parse(property.collageImages);
            collageImages.forEach((imagePath) => {
                const fullPath = path.join(__dirname, '..', imagePath);
                if (fs.existsSync(fullPath)) {
                    fs.unlink(fullPath, (err) => {
                        if (err) console.error('Error removing collage image:', err);
                    });
                }
            });
        }

        // Delete the property from the database
        await propertyModel.deleteProperty(id);

        res.json({message: 'Property and associated images deleted successfully'});
    } catch (err) {
        console.error('Error deleting property:', err);
        res.status(500).json({message: 'Error deleting property', error: err.message});
    }
};

const getPropertyById = async (req, res) => {
    const { id } = req.params;

    try {
        const query = `
            SELECT p.*, GROUP_CONCAT(pi.image_path) AS collageImages
            FROM properties p
                     LEFT JOIN property_images pi ON p.id = pi.property_id
            WHERE p.id = ?
            GROUP BY p.id;
        `;

        const [result] = await pool.query(query, [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'Property not found' });
        }

        const property = result[0];
        const collageImages = property.collageImages ? property.collageImages.split(',') : [];
        res.json({
            ...property,
            collageImages,
        });
    } catch (error) {
        console.error('Error fetching property by ID:', error);
        res.status(500).json({ message: 'Error fetching property', error: error.message });
    }
};

module.exports = {getAllProperties, addProperty, updateProperty, deleteProperty, getPropertyById};