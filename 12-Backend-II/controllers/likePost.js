const Post = require('../models/Post.Js')

exports.likePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete like info'
            });
        }

        const post = await Post.findById({ _id: id });

        if (!post) {
            return res.status(500).json({
                success: false,
                message: 'Invalid id'
            });
        }

        await Post.findByIdAndUpdate({ _id: id }, {like : true});

        return res.status(200).json({
            success: true,
            post: post,
            message: 'Like added successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            err: err.message,
            message: 'Error in liking a post'
        });
    }
}