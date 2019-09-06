import React from 'react';
import Game from '../components/Game'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react';

const GamesContainer = (props) => {
    return (
        <div>
        <Card.Group>
        
            {props.games.games.map((game, i) => <Game key={i} game={game} />)}
            </Card.Group>
        </div>
    )
}

// const connector = connect()
// const connectedComponent = connector(GamesContainer)

const mapStateToProps = state => ({ games: state.games})

export default connect(mapStateToProps)(GamesContainer)