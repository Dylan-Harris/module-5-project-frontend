import { createStore } from 'redux'
import gamesReducer from './reducers/gamesReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    games: gamesReducer
})

// const initalState = {
//     user: {
//         username: this.state.username,
//         bio: this.state.bio,
//         avatar: this.state.avatar
//     },
//     wishlist: this.state.wishlist,
//     games: [],

// }

// const rootReducer = (state, action) => state

export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)