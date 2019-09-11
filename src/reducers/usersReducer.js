const initialState = {
    logged_user: {},
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE': {
            return {...state, logged_user: action.data.user}
        }
        // case 'GET_USER': {
        //     console.log(state.users)
        //     console.log(action.data.username)
        //    let current_user = state.users.users.filter(user => user.username === action.data.user.username)
        //    return {...state, logged_user: current_user[0]}
        // }
        case 'GET_USERS': {
            return {...state, users: action.data}
        }
        default:
        return state
    }
   
}