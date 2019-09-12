import React from 'react'
import { Grid } from 'semantic-ui-react'
import Navbar from './Navbar'
import { connect } from 'react-redux'

const Wishlist = (props) => (
    <div>
    <Navbar />  <Grid reversed='computer vertically' style={{marginTop: -400}}>
    <Grid.Row>
      <Grid.Column style={{color: 'white'}}><h3>{null}</h3></Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column style={{color: 'white'}}><h3>{null}</h3></Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column style={{color: 'white'}}><h3>{null}</h3></Grid.Column>
    </Grid.Row>
    <Grid.Row>
    {/* {props.users.logged_user.wishlist.map((game) => <Grid.Column style={{color: 'white'}}><h3>{game.game.title}</h3></Grid.Column>)} */}
    <Grid.Column style={{color: 'white'}}><h2>{props.users.logged_user.wishlists ? props.users.logged_user.wishlists.length : null}</h2></Grid.Column>
    </Grid.Row>
  <h1 style={{color: 'white'}}>Number of Games in your Wishlist:</h1>
  </Grid>
  {console.log(props.users.logged_user.wishlists ? props.users.logged_user.wishlists.length : null)}
  </div>
)
const mapStateToProps = state => state
export default connect(mapStateToProps)(Wishlist)