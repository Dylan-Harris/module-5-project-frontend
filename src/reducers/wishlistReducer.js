const initialState = {
    wishlist: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GAMES': {
            return {...state, wishlist: action.data}
        }
        default:
        return state
    }
   
} 