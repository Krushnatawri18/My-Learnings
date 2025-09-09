const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    like: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Post', postSchema);