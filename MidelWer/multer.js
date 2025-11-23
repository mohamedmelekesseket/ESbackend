import multer from 'multer';
import path from 'path';
import fs from 'fs';

// ✅ FIX: Change to server/uploads
const dir = './server/uploads';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'server/uploads/'), // ✅ FIX
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;