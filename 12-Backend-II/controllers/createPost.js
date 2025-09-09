const Post = require('../models/Post.Js')

exports.createPost = async (req, res) => {
    try {
        const { title, description, like } = req.body;
        console.log(title, description);

        if (!title || !description) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete post info'
            });
        }

        const post = await Post.create({ title, description, like });

        return res.status(200).json({
            success: true,
            post: post,
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