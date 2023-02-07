const express = require('express');
const router = express.Router();
const API = require("../controllers/api")

router.get('/', API.fetchAllPosts);
router.get('/:id', API.fetchPostByID);

module.exports = router;