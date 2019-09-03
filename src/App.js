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



export default class App extends React.Component{
  constructor() {
    super()
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/games')
    .then(res => res.json())
    .then(data => this.setState({
        games: data
    }))
}

  render() {
    return(
      <div>
      {/* <BackgroundLogin /> */}
      <Navbar />
      <Main />
      {/* <UserCard />  */}
      {/* <Wishlist /> */}
      {/* <Friends /> */}
        
    </div>
    )
  }
}
