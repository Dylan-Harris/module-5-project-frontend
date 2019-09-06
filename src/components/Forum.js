import React from 'react'
import { Grid } from 'semantic-ui-react'
import Navbar from './Navbar'


const Forum = (props) => (
    <div>
    <Navbar />
  <Grid reversed='computer vertically'>
    <Grid.Row>
      <Grid.Column style={{color: 'white'}}><h2>{props.forum.title}</h2></Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default Forum