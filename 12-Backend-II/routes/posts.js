const express = require('express');
const { createPost } = require('../controllers/createPost');
const { getPosts } = require('../controllers/getPosts');
const { likePost } = require('../controllers/likePost');
const { unlikePost } = require('../controllers/unlikePost');

const router = express.Router();

router.post('/createPost', createPost);
router.get('/getPosts', getPosts);
router.post('/likePost/:id', likePost);
router.post('/unlikePost/:id', unlikePost);

module.exports = router;