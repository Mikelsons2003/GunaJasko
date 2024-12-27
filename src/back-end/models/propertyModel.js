const db = require('../db');

const getPropertyById = async (id) => {
    const query = 'SELECT * FROM properties WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    return rows[0];
};

const getAllProperties = async () => {
    try {
        const [results] = await db.query(
            `SELECT id,
                    title,
                    titleEng,
                    titleRu,
                    category,
                    transactionType,
                    price,
                    mainImage,
                    address,
                    size,
                    roomCount,
                    floor,
                    description,
                    descriptionEng,
                    descriptionRu,
                    createdAt,
                    updatedAt
             FROM properties
             ORDER BY createdAt DESC`
        );
        return results;
    } catch (err) {
        console.error('Database query failed:', err);
        throw err;
    }
};

const addProperty = (data) => {
    const {
        title,
        titleEng,
        titleRu,
        category,
        transactionType,
        mainImage,
        price,
        address,
        size,
        roomCount,
        floor,
        description,
        descriptionEng,
        descriptionRu,
    } = data;

    return new Promise((resolve, reject) => {
        const sql = `
            INSERT INTO properties
            (title, titleEng, titleRu, category, transactionType, mainImage, price, address, size, roomCount, floor,
             description, descriptionEng, descriptionRu, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
        `;

        db.query(
            sql,
            [
                title,
                titleEng,
                titleRu,
                category,
                transactionType,
                mainImage,
                price,
                address,
                size,
                roomCount,
                floor,
                description,
                descriptionEng,
                descriptionRu,
            ],
            (err, result) => {
                if (err) {
                    console.error('Error inserting property:', err);
                    reject(err);
                } else {
                    resolve(result); // Return the result to retrieve the `insertId`
                }
            }
        );
    });
};

const updateProperty = (id, data) => {
    const {
        title,
        titleEng,
        titleRu,
        category,
        transactionType,
        mainImage,
        price,
        address,
        size,
        roomCount,
        floor,
        description,
        descriptionEng,
        descriptionRu
    } = data;

    const updatedAt = new Date();

    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE properties
            SET title           = ?,
                titleEng        = ?,
                titleRu         = ?,
                category        = ?,
                transactionType = ?,
                mainImage       = ?,
                price           = ?,
                address         = ?,
                size            = ?,
                roomCount       = ?,
                floor           = ?,
                description     = ?,
                descriptionEng  = ?,
                descriptionRu   = ?,
                updatedAt       = ?
            WHERE id = ?
        `;
        db.query(
            sql,
            [
                title,
                titleEng,
                titleRu,
                category,
                transactionType,
                mainImage,
                price,
                address,
                size,
                roomCount,
                floor,
                description,
                descriptionEng,
                descriptionRu,
                updatedAt,
                id
            ],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

const deleteProperty = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM properties WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {getAllProperties, addProperty, updateProperty, deleteProperty, getPropertyById};
