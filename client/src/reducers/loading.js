const loading = (loading = true, action) => {

    switch (action.type) {
        case 'IS_LOADING':
            return action.payload;

        default:
            return loading;
    }
}

export default loading;
