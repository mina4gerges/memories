import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const addPost = newPost => axios.post(url, newPost);
export const removePost = postId => axios.delete(url, {data: {postId}});
