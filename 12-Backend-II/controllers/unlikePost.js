const Like = require('../models/Like');
const Post = require('../models/Post.Js')

exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        if (!post || !like) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete unlike info'
            });
        }

        const postAvailable = await Post.findById({ _id: post });
        const likeAvailable = await Like.findById({ _id: like });

        if (!postAvailable || !likeAvailable) {
            return res.status(500).json({
                success: false,
                message: 'Invalid id'
            });
        }

        // updating Like collection
        const updatedLike = await Like.findOneAndDelete({ _id: like, post: post });

        const updatedPost = await Post.findByIdAndUpdate({ _id: post }, { $pull: { likes: updatedLike._id } }, { new: true })
        .populate('likes')
        .exec();

        return res.status(200).json({
            success: true,
            post: updatedPost,
            like: updatedLike,
            message: 'Like removed successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            err: err.message,
            message: 'Error in unliking a post'
        });
    }
}