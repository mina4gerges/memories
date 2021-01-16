import {combineReducers} from "redux";
import posts from './posts';
import loading from './loading';
import auth from './auth';

export default combineReducers({
    posts,
    loading,
    auth,
});
