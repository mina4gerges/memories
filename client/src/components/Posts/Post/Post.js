import CardComponent from "../../../utils/CardComponent";
import {removePost, editPost} from "../../../actions/posts";
import {useDispatch} from "react-redux";

const Post = ({loading, data}) => {
    const dispatch = useDispatch();

    if (loading)
        return <CardComponent
            loading={loading}
        />

    // const {_id, title, message, creator, tags, selectedFile, likeCount, createdAt} = data;
    const {_id, title, message, selectedFile} = data;

    const onIconClick = action => () => {
        switch (action) {
            case "delete":
                dispatch(removePost(_id));
                break;
            case "edit":
                dispatch(editPost(_id, data));
                break;
            default:
                break;
        }
    }

    return <CardComponent
        title={title}
        loading={loading}
        image={selectedFile}
        description={message}
        onIconClick={onIconClick}
    />
}

export default Post
