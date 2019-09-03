import React from 'react';
import Game from '../components/Game'
import { connect } from 'react-redux'

const GamesContainer = (props) => {
    return (
        <div>
            {props.games.map((game, i) => <Game key={i} game={game} />)}
        </div>
    )
}

// const connector = connect()
// const connectedComponent = connector(GamesContainer)

const mapStateToProps = state => state.games

export default connect(mapStateToProps)(GamesContainer)