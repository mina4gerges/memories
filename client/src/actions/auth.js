import {AUTH} from '../constants/actionTypes';
import {signInUser, signUpUser} from "../api";

export const signUp = (formData, history) => async dispatch => {
    try {

        const res = await signUpUser(formData);

        dispatch({type: AUTH, data: res.result});

        history.push('/');

    } catch (e) {

    }
}

export const signIn = (formData, history) => async dispatch => {
    try {
        const res = await signInUser(formData);

        dispatch({type: AUTH, data: res.result});

        history.push('/');
    } catch (e) {

    }
}

