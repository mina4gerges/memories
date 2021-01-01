import {combineReducers} from "redux";
import posts from './posts';
import loading from './loading';

export default combineReducers({
    posts,
    loading,
});
