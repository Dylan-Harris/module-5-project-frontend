import React from 'react';
import './App.css';
import BackgroundLogin from './components/BackgroundLogin';
import Main from './components/Main'
import GamesContainer from './containers/GamesContainer';
import { getGames } from './services/backend.js'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/auth/SignUp';
import Forum from './components/Forum'
import FriendsList from './components/FriendsList';
import { getForums } from './services/backend'
import ForumsContainer from './containers/ForumsContainer';



class App extends React.Component{
  componentDidMount() {
    getGames().then(data => this.props.dispatch({
      type: 'GET_GAMES',
      data
    }))
    getForums().then(data => this.props.dispatch({
      type: 'GET_FORUMS',
      data
    }))
}



  render() {
    return(
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path="/" component={BackgroundLogin} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Home" component={Main} />
            <Route exact path="/Games" component={GamesContainer} />
            <Route exact path="/Forums" component={ForumsContainer} />
            <Route exact path="/Friends" component={FriendsList} />
            </React.Fragment>
        </Router>
    </div>
    )
  }
}

export default connect()(App)
