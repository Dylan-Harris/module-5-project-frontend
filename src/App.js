import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import './App.css';
import BackgroundLogin from './components/BackgroundLogin';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard'
import Wishlist from './components/Wishlist';





function App() {
  return (
    <div>
      {/* <BackgroundLogin /> */}
      <Navbar />
      <UserCard /> 
      <Wishlist />
        
    </div>
  )
}

export default App;
