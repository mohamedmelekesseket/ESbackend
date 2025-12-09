import multer from 'multer';
import path from 'path';
import fs from 'fs';

// ✅ FIX: Change to server/uploads

const uploadsDir = process.env.UPLOADS_DIR || './server/uploads';
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'server/uploads/'), // ✅ FIX
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;