import { createStore } from 'redux'
import gamesReducer from './reducers/gamesReducer'
import { combineReducers } from 'redux';
import forumReducer from './reducers/forumReducer'
import usersReducer from './reducers/usersReducer';
import wishlistReducer from './reducers/wishlistReducer';
import commentsReducer from './reducers/commentsReducer';


const rootReducer = combineReducers({
    games: gamesReducer,
    forums: forumReducer,
    users: usersReducer,
    wishlist: wishlistReducer,
    comments: commentsReducer
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