import React from 'react'
import { Card, Grid, GridColumn } from 'semantic-ui-react'
import Navbar from './Navbar';
import { connect } from 'react-redux'
import {Search} from 'semantic-ui-react'

 class Game extends React.Component{
  constructor(props) {
    super(props)
    this.state = { 
      user_id: this.props.users.logged_user.id,
      game_id: this.props.game.id
    }
  }
  handleClick = (e) => {
    console.log("click")
    const token = localStorage.jwt
    fetch("http://localhost:3000/api/v1/wishlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        'Authorization': `bearer ${token}`
      },
      body: JSON.stringify({
        wishlist: this.state
      })
    })
    .then(res => res.json())
  }
  render() {
    const styles = {
      center: {
        marginLeft: "auto",
        marginRight: "auto"
      }
    }
    return(
      <div>
        <Navbar />
        <div className={styles.center}>
    <div style={{padding: 20}}>
  <Card
    image={this.props.game.background_image}
    header={this.props.game.title}
  />
  <button onClick={this.handleClick}>Add Game to Wishlist</button>
    </div>
    </div>
  </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Game)


