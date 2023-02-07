const Post = require("../models/posts")

module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(req,res){
        try {
            const posts = await Post.find()
            res.status(200).json(posts);
        } catch (error) {
            res.status(404).json({message: "not"})
        }
    }
        // fetch posts by ID
    static async fetchPostByID(req,res){
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
}