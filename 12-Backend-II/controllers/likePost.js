const Like = require('../models/Like');
const Post = require('../models/Post.Js')

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;

        if (!post || !user) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete like info'
            });
        }

        const postAvailable = await Post.findById({ _id: post });

        if (!postAvailable) {
            return res.status(500).json({
                success: false,
                message: 'Invalid id'
            });
        }

        const like = await Like({
            post, user
        });

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate({_id: post}, {$push: {likes: savedLike._id}}, {new: true})
        .populate('likes')
        .exec();

        return res.status(200).json({
            success: true,
            like: savedLike,
            post: updatedPost,
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