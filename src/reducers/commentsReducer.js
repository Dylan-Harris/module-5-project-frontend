const initialState = {
    comments: [],
    comment: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMMENTS': {
            return {...state, comments: action.data}
        }
        case 'ADD_COMMENT': {
            return {...state, comment: action.data}
        }
        default:
        return state
    }
   
}