import * as api from '../api';
import {setIsLoading} from "./loading";

// Action Creators
export const getPosts = () => async dispatch => {
    try {
        const {data} = await api.fetchPosts();

        setTimeout(() => {
            dispatch(setIsLoading(false));
        }, 1500);

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (e) {
        console.log(e.message);
    }
}

export const createPost = post => async dispatch => {
    try {
        const {data} = await api.addPost(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (e) {
        console.log(e.message);
    }
}

export const removePost = postId => async dispatch => {
    try {
        const {data} = await api.removePost(postId);

        dispatch({type: 'REMOVE', payload: data});
    } catch (e) {
        console.log(e.message);
    }
}
