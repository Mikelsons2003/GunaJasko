const db = require('../db');

const propertyImageModel = {
    create: async (propertyId, imagePath) => {
        console.log('Inserting image with property ID:', propertyId, 'and image path:', imagePath);

        // Ensure the propertyId and imagePath are not null/undefined
        if (!propertyId || !imagePath) {
            console.error('Error: Missing propertyId or imagePath');
            return;
        }

        const sql = `
            INSERT INTO property_images (property_id, image_path, created_at, updated_at)
            VALUES (?, ?, NOW(), NOW())
        `;
        const values = [propertyId, imagePath];

        console.log('SQL Query:', sql);
        console.log('Values:', values);

        return new Promise((resolve, reject) => {
            db.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error inserting into property_images:', error);
                    return reject(error);
                }
                console.log('Image inserted successfully:', result);
                resolve(result);
            });
        });
    },
};

module.exports = propertyImageModel;
