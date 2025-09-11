const Post = require('../models/Post.Js');
const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        if (!post || !user || !body) {
            return res.status(500).json({
                success: false,
                message: 'Invalid comment info'
            });
        }

        const postAvailable = await Post.findById({_id: post});

        if(!postAvailable){
            return res.status(500).json({
                success: false,
                message: 'Invalid post info'
            });
        }

        // creates an instance of comment and returns whole comment document
        const comment = new Comment({
            post, user, body
        });

        // comment instance saved in db
        const savedComment = await comment.save();

        // find the post and add new comment id into comments array for that particular post
        const updatedPost = await Post.findByIdAndUpdate({ _id: post }, { $push: { comments: savedComment._id } },
            { new: true })
            .populate('comments')
            .exec();

        return res.status(200).json({
            success: true,
            comment: savedComment,
            post: updatedPost,
            message: 'Comment added successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in creating a comment'
        });
    }
}