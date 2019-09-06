import React from 'react'
import { Grid } from 'semantic-ui-react'
import Navbar from './Navbar'

const Wishlist = () => (
    <div>
    <Navbar />  <Grid reversed='computer vertically' style={{marginTop: -400}}>
    <Grid.Row>
      <Grid.Column style={{color: 'white'}}><h3>Computer Row 4</h3></Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column style={{color: 'white'}}><h3>Computer Row 3</h3></Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column style={{color: 'white'}}><h3>Computer Row 2</h3></Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column style={{color: 'white'}}><h3>Computer Row 1</h3></Grid.Column>
    </Grid.Row>
  <h1 style={{color: 'white'}}>Games Wishlist</h1>
  </Grid>
  </div>
)

export default Wishlist