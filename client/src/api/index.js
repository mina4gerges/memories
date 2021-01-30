import axios from 'axios';

// const API = axios.create({baseURL: 'https://memories-project-youtube.herokuapp.com'})
const API = axios.create({baseURL: 'http://localhost:5000'})

export const fetchPosts = () => API.get('/posts');
export const addPost = newPost => API.post('/posts', newPost);
export const removePost = id => API.delete(`/posts/${id}`);
export const editPost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)

export const signInUser = (formData) => API.post('/user/signIn', formData);
export const signUpUser = (formData) => API.post('/user/signUp', formData);
