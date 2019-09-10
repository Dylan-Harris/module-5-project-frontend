import React from 'react'
import { Grid } from 'semantic-ui-react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { Button, Comment, Form, Header } from 'semantic-ui-react'



const Forum = (props) => (
    <div>
    <Navbar />
  <Grid reversed='computer vertically'>
    <Grid.Row>
      <Grid.Column as={Link} to={`/Forums/${props.forum.id}`} style={{color: 'white'}}><h2>{props.forum.title}</h2></Grid.Column>
    </Grid.Row>
  </Grid>

  </div>
)

export default Forum