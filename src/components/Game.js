import React from 'react'
import { Card, Icon, Grid, GridColumn } from 'semantic-ui-react'
import Navbar from './Navbar';

const Game = (props) => (
    <div>
        <Navbar />
    <Grid container columns={3}>
    <GridColumn>
  <Card
    // image={props.game.background_image}
    // header={props.game.title}
  />
  </GridColumn>
  </Grid>
  </div>
)

export default Game