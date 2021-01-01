import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (e) {
        res.status(404).json({message: e.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (e) {
        res.status(409).json({message: e.message});
    }
}

export const deletePost = async (req, res) => {
    try {
        const {id: _id} = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id))
            res.status(404).json({message: "No post with this id"});

        await PostMessage.remove({_id});

        res.status(201).json(_id);
    } catch (e) {
        res.status(409).json({message: e.message});
    }
}

export const editPost = async (req, res) => {
    try {
        const {id: _id} = req.params;
        const post = req.body;

        if (!mongoose.Types.ObjectId.isValid(_id))
            res.status(404).json({message: "No post with this id"});

        // new: true --> return updated post
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

        res.status(201).json(updatedPost);
    } catch (e) {
        res.status(409).json({message: e.message});
    }
}
