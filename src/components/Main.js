import React from 'react'
import UserCard from './UserCard';
import Wishlist from './Wishlist';
import Friends from './Friends';
import Navbar from './Navbar'
import { getUser } from '../services/backend';
import { connect } from 'react-redux'

class Main extends React.Component{


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
export default connect()(Main)