import express from "express";
import auth from '../middleare/auth.js';
import {getPosts, createPost, deletePost, editPost} from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth,createPost);
router.patch('/:id',auth, editPost);
router.delete('/:id',auth, deletePost);

export default router;
