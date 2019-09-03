import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import './App.css';
import BackgroundLogin from './components/BackgroundLogin';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard'
import Wishlist from './components/Wishlist';
import Friends from './components/Friends'
import Main from './components/Main'
import GamesContainer from './containers/GamesContainer';
import { getGames } from './services/backend.js'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from './components/auth/SignUp';



class App extends React.Component{
  constructor() {
    super()
  }
  componentDidMount() {
    getGames().then(data => this.props.dispatch({
      type: 'GET_GAMES',
      data
    }))
}

  render() {
    return(
      <div className="App">
        <Router>
          {/* <Switch> */}
            <BackgroundLogin />
            {/* <Route exact path={"/"} component={Main}></Route> */}
            <SignUp />

         {/* </Switch> */}
        </Router>
    </div>
    )
  }
}

export default connect()(App)
