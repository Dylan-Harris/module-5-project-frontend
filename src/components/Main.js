import React from 'react'
import UserCard from './UserCard';
import Wishlist from './Wishlist';
import Friends from './Friends';
import Navbar from './Navbar'
import { getProfile } from '../services/backend';
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          click: false
        }
      }
    componentDidMount() {
        this.props.fetchEverything()
    }

    showForm = (e) => {
        console.log(e.target, "click")
        this.setState({
            click: !this.state.click
        })
    }
    render() {
        return(
            <div>
                 <Navbar />
                 <UserCard> <Button as={Link} to="/Edit" style={{color: 'brown'}}>Edit Profile</Button></UserCard>
                 <Wishlist />
                 {/* <Friends /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({ logged_user: state.logged_user})
export default connect(mapStateToProps)(Main)