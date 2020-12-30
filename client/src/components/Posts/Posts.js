import Post from "./Post/Post";

import {useSelector} from "react-redux";

const Posts = () => {
    const posts = useSelector(state => state.posts)

    console.log("posts", posts);

    return <>
        <Post/>
        <Post/>
        <Post/>
    </>
}

export default Posts
