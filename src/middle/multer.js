import  multer  from "multer"
import { config } from "../config/config.js"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.UPLOADS)
    },
    filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, `${Date.now()}${ext}`)
    }
})

const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Tipo de archivo no soportado'), false);
  }
};

const upload = multer({ storage, fileFilter });

export { upload }