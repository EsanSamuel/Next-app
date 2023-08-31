import mongoose from "mongoose";

const Post = new mongoose.Schema({
    image: { type: String, required: true },
    details: { type: String, required: true },
    postedAt: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    Price: { type: String, required: true }
})

const PostSchema = mongoose.models.Post || mongoose.model('Post', Post)

export default PostSchema