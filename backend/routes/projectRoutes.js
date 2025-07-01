const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  createProject,
  getAllProjects
} = require('../controllers/projectController');

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/projects');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage: storage });

// Routes
router.post('/', upload.single('image'), createProject);
router.get('/', getAllProjects);

module.exports = router;
