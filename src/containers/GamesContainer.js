import React from 'react';
import Game from '../components/Game'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react';
import {Search} from 'semantic-ui-react'

class GamesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value
        })
    }

    filterGames = () => {
        let filteredGames = this.props.games.games.filter(game => game.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return filteredGames
    }
    render() {
        return(
            <div>
            {/* <Search style={{marginTop: 150}} onChange={this.handleChange} /> */}
            <div className="ui large input" style={{marginTop: 150}}>
      <input
        type="text"
        placeholder={"Search Games"}
        onChange={this.handleChange}
      />
      {/* <i className="circular search link icon"></i> */}
    </div>
        <div style={{paddingLeft: 100}}>
        <center><Card.Group>
        
            {this.filterGames().map((game, i) => <Game key={i} game={game} />)}
            </Card.Group>
            </center>
        </div>
        </div>
        )
    }
}

// const GamesContainer = (props) => {
//     return (
//         <div>
//             <Search style={{marginTop: 150}} />
//         <div style={{paddingLeft: 100}}>
//         <center><Card.Group>
        
//             {props.games.games.map((game, i) => <Game key={i} game={game} />)}
//             </Card.Group>
//             </center>
//         </div>
//         </div>
//     )
// }

// const connector = connect()
// const connectedComponent = connector(GamesContainer)

const mapStateToProps = state => ({ games: state.games})

export default connect(mapStateToProps)(GamesContainer)