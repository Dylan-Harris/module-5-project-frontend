import React from 'react';
import './App.css';
import BackgroundLogin from './components/BackgroundLogin';
import Main from './components/Main'
import GamesContainer from './containers/GamesContainer';
import { getGames, getUsers, getWishlist, getComments } from './services/backend.js'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/auth/SignUp';
import Forum from './components/Forum'
import FriendsList from './components/FriendsList';
import { getForums } from './services/backend'
import ForumsContainer from './containers/ForumsContainer';
import Comments from './components/Comments'
import CommentsContainer from './containers/CommentsContainer';



class App extends React.Component{
  
  setCurrenUser = (data) => {
    
  }
  componentDidMount() {
    // getUser().then(data => this.props.dispatch({
    //   type: 'GET_USER',
    //   data
    // }))
    getGames().then(data => this.props.dispatch({
      type: 'GET_GAMES',
      data
    }))
    getForums().then(data => this.props.dispatch({
      type: 'GET_FORUMS',
      data
    }))

    getWishlist().then(data => this.props.dispatch({
      type: 'GET_WISHLIST',
      data
    }))

    getUsers().then(data => this.props.dispatch({
      type: 'GET_USERS',
      data
    }))
    getComments().then(data => this.props.dispatch({
      type: 'GET_COMMENTS',
      data
    }))
    
}

showForum = (id) => {
  let f = this.props.forums.find(forum => (forum.id === Number(id)))
    return f
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
            <Route exact path="/Forums/:id" render={({match}) => {
              return <Comments forum={this.showForum(match.params.id)} />
            }}/>
            <Route exact path="/Friends" component={FriendsList} />
            </React.Fragment>
        </Router>
    </div>
    )
  }
}
const mapStateToProps = state => ({ forums: state.forums.forums})
export default connect(mapStateToProps)(App)
