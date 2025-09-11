const Post = require('../models/Post.Js')

exports.createPost = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete post info'
            });
        }

        const post = new Post({
            title, description
        });

        const savedPost = await post.save();

        return res.status(200).json({
            success: true,
            post: savedPost,
            message: 'Post created successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            err: err.message,
            message: 'Error in creating a post'
        });
    }
}

exports.dummyPost = async (req, res) => {
    res.send(`<h1>Dummy Post</h1>`);
}