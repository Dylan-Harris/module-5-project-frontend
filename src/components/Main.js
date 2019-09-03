import React from 'react'
import GamesContainer from '../containers/GamesContainer'
import UserCard from './UserCard';
import Wishlist from './Wishlist';
import Friends from './Friends';
import Navbar from './Navbar'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

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
                 <Navbar />
                 <UserCard />
                 <Wishlist />
                 <Friends />
            </div>
        )
    }
}