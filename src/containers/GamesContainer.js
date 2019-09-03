import React from 'react';
import Game from '../components/Game'
import { connect } from 'react-redux'

class GamesContainer extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
        {this.props.games.map((game, i) => <Game key={i} game={game} />)}
    </div>
        )
    }
}

// const connector = connect()
// const connectedComponent = connector(GamesContainer)

const mapStateToProps = (state => {
    console.log(state)
    return state.games
})

export default connect(mapStateToProps)(GamesContainer)