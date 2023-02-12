const multer = require("multer");
const path = require("path");

const multerConf = {
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      next(null, path.resolve("./public/assets/upload"));
    },
    filename: (req, file, next) => {
      const ext = path.extname(file.originalname);
      const newName = `${file.fieldname}_${Date.now()}_${Math.round(
        Math.random() * 1e9
      )}${ext}`;
      next(null, newName);
    },
  }),
  limits: 5,
  fileFilter: (req, file, next) => {
    if (!file) {
      next();
    }
    const image = file.mimetype.startsWith("image/");
    if (image) {
      next(null, true);
    } else {
      next(new Error("file type not supported"), false);
    }
  },
};

module.exports = multerConf;
