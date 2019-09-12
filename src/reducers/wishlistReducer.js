const initialState = {
    wishlist: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WISHLIST': {
            return {...state, wishlist: action.data}
        }
        default:
        return state
    }
   
}