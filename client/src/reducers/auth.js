import {AUTH, LOGOUT} from "../constants/actionTypes";

const auth = (state = null, action) => {

    switch (action.type) {

        case AUTH:
            localStorage.setItem('profile', JSON.stringify(action.data));
            return {...state, authObj: action.data};

        case LOGOUT:
            localStorage.clear();
            return {...state, authObj: null};

        default:
            return state;
    }

}

export default auth;
