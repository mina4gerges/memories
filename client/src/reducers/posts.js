import {CREATE, DELETE, FETCH_ALL, UPDATE} from "../constants/actionTypes";

const posts = (posts = [], action) => {

    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload];

        case DELETE:
            return posts.filter(post => post._id !== action.payload);

        case UPDATE:
            return posts.map(post => post._id === action.payload._id ? action.payload.data : post)

        default:
            return posts;
    }
}

export default posts;
