const likedVideoReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'POST_LIKEVIDEO':
            return { ...state, data: actions?.data }
        default:
            return state;
    }
}