const fs = require('fs');
const formidable = require('formidable');
const path = require('path');

const uploadMiddleware = (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../uploads');
    form.keepExtensions = true;
    form.multiples = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error('Error parsing the form:', err);
            return res.status(500).json({error: 'File upload failed'});
        }

        const processFile = (file) => {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(file.mimetype)) {
                throw new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.');
            }

            const uniqueFileName = `${Date.now()}_${file.originalFilename}`;
            const newFilePath = path.join(form.uploadDir, uniqueFileName);

            try {
                fs.renameSync(file.filepath, newFilePath);
                return `/uploads/${uniqueFileName}`;
            } catch (error) {
                console.error('Error moving uploaded file:', error);
                throw new Error('Failed to process uploaded file');
            }
        };

        try {
            // Process mainImage
            if (files.mainImage) {
                const mainImage = Array.isArray(files.mainImage) ? files.mainImage[0] : files.mainImage;
                req.body.mainImage = processFile(mainImage);
            }

            // Process collage images
            if (files.collageImages) {
                const collageImages = Array.isArray(files.collageImages) ? files.collageImages : [files.collageImages];
                req.body.collageImages = collageImages.map(processFile);
            }

            req.body = {...fields, ...req.body};
            next();
        } catch (error) {
            console.error('Error processing uploads:', error);
            return res.status(400).json({error: error.message});
        }
    });
};

module.exports = uploadMiddleware;
