import CardComponent from "../../../utils/CardComponent";
import {removePost} from "../../../actions/posts";
import {useDispatch} from "react-redux";

const Post = ({loading, data}) => {
    const dispatch = useDispatch();

    if (loading)
        return <CardComponent
            loading={loading}
        />

    // const {_id, title, message, creator, tags, selectedFile, likeCount, createdAt} = data;
    const {_id, title, message} = data;

    const onIconClick = action => () => {
        if (action === 'delete')
            dispatch(removePost(_id))
    }

    return <CardComponent
        title={title}
        loading={loading}
        description={message}
        onIconClick={onIconClick}
    />
}

export default Post
