import express from "express";
import {getPosts, createPost, deletePost, editPost} from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);

export default router;
