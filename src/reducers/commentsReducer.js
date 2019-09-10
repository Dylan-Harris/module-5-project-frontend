const initialState = {
    comments: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMMENTS': {
            return {...state, comments: action.data}
        }
        default:
        return state
    }
   
}