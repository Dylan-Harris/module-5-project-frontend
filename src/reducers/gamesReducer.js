const initialState = {
    games: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GAMES': {
            return {...state, games: action.data.games}
        }
    }
    return state
}