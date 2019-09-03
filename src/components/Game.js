import React from 'react'
import { Card, Icon, Grid, GridColumn } from 'semantic-ui-react'

const Game = (props) => (
    <Grid container columns={3}>
    <GridColumn>
  <Card
    image={props.game.background_image}
    header={props.game.title}
  />
  </GridColumn>
  </Grid>
)

export default Game