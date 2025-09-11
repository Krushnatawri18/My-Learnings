const express = require('express');
const { createPost, dummyPost } = require('../controllers/createPost');
const { getPosts } = require('../controllers/getPosts');
const { likePost } = require('../controllers/likePost');
const { unlikePost } = require('../controllers/unlikePost');
const { createComment } = require('../controllers/createComment');

const router = express.Router();

// post
router.post('/createPost', createPost);
router.get('/getPosts', getPosts);
router.get('/dummyPost', dummyPost);

// like and unliking post
router.post('/likePost', likePost);
router.post('/unlikePost', unlikePost);

// comment
router.post('/createComment', createComment);

module.exports = router;