import React from 'react'
import GamesContainer from '../containers/GamesContainer'

export default class Main extends React.Component{

    // componentDidMount() {
    //     fetch('http://localhost:3000/api/v1/games')
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //         games: data
    //     }))
    // }

    render() {
        return(
            <div>
                <GamesContainer games={this.state.games} />
            </div>
        )
    }
}