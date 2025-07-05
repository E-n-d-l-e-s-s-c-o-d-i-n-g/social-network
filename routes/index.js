const express = require("express");
const router = express.Router();
const multer = require("multer");

const uploadsDestination = 'uploads';

const storage = multer.diskStorage({
  destination: uploadsDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const uploads = multer({ storage: storage });

router.get('/register', (req, res) => {
  res.send("register");
});
router.get('/auth', (req, res) => {
  res.send("auth");
});
router.get('/create', (req, res) => {
  res.send("create");
});
router.get('/update', (req, res) => {
  res.send("update");
});
router.get('/delete', (req, res) => {
  res.send("delete");
});

module.exports = router;