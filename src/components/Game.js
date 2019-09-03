import React from 'react';

const Game = (props) => {
    return(
        <div>
    <h2>{props.game.name}</h2>
        <img src={props.game.background_image}></img>
    </div>
        
    )
}
    
    


// const mapStateToProps = (state => {
//     console.log(state)
//     return state.games.map
// })

export default Game
