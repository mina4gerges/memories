import * as api from '../api';
import {setIsLoading} from "./loading";
import {CREATE, DELETE, FETCH_ALL, UPDATE} from "../constants/actionTypes";

// Action Creators
export const getPosts = () => async dispatch => {
    try {
        const {data} = await api.fetchPosts();

        setTimeout(() => {
            dispatch(setIsLoading(false));
        }, 1500);

        dispatch({type: FETCH_ALL, payload: data});
    } catch (e) {
        console.log(e.message);
    }
}

export const createPost = post => async dispatch => {
    try {
        const {data} = await api.addPost(post);

        dispatch({type: CREATE, payload: data});
    } catch (e) {
        console.log(e.message);
    }
}

export const removePost = id => async dispatch => {
    try {
        const {data} = await api.removePost(id);

        dispatch({type: DELETE, payload: data});
    } catch (e) {
        console.log(e.message);
    }
}

export const editPost = (id, post) => async dispatch => {
    try {
        const {data} = await api.editPost(id, post);

        dispatch({type: UPDATE, payload: {_id: id, data}});
    } catch (e) {
        console.log(e.message);
    }
}
