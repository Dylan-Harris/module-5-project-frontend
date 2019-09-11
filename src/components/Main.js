import React from 'react'
import UserCard from './UserCard';
import Wishlist from './Wishlist';
import Friends from './Friends';
import Navbar from './Navbar'
import { getProfile } from '../services/backend';
import { connect } from 'react-redux'

class Main extends React.Component{
    constructor(props) {
        super(props)
    }


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

const mapStateToProps = state => ({ logged_user: state.logged_user})
export default connect(mapStateToProps)(Main)