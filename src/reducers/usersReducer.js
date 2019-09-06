const initialState = {
    user: {},
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER': {
            return {...state, user: action.data.games}
        }
        default:
        return state
    }
   
}