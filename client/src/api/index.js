import axios from 'axios';

const url = 'https://memories-project-youtube.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const addPost = newPost => axios.post(url, newPost);
export const removePost = id => axios.delete(`${url}/${id}`);
export const editPost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
