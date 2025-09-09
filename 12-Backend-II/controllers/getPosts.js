const Post = require('../models/Post.Js');

exports.getPosts = async(req, res) => {
    try{
        const posts = await Post.find({});

        if(!posts){
            return res.status(500).json({
                success: false,
                message: 'No posts found'
            });
        }

        return res.status(200).json({
            success: true,
            posts: posts,
            message: 'Posts fetched successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            err: err.message,
            message: 'Error in fetching all posts'
        });
    }
}