import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
}, {timestamps: true});

export default mongoose.model('PostMessage', postSchema);
