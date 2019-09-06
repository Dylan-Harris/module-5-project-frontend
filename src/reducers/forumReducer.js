const initialState = {
    forums: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FORUMS': {
            return {...state, forums: action.data.forums}
        }
        default:
        return state
    }
   
}