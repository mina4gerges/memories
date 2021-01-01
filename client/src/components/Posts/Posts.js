import Post from "./Post/Post";
import {Empty} from 'antd';

import {useSelector} from "react-redux";

const Posts = () => {

    const posts = useSelector(state => state.posts);
    const isLoading = useSelector(state => state.loading);

    console.log("posts", posts);
    console.log("isLoading", isLoading);

    if (isLoading)
        return <div>
            <Post loading={isLoading}/>
        </div>

    if (posts.length === 0)
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>

    return <div>
        {posts.map(post => <Post key={post._id} data={post}/>)}
    </div>
}

export default Posts
