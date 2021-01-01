const posts = (posts = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload];

        case 'REMOVE':
            return posts.filter(post => post._id !== action.payload);

        case 'EDIT':
            return posts.find(post => post._id !== action.payload);

        default:
            return posts;
    }
}

export default posts;
