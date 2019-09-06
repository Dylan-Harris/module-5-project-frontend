import React from 'react'
import { Card, Grid, GridColumn } from 'semantic-ui-react'
import Navbar from './Navbar';

const styles = {
    center: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }


const Game = (props) => (
    
    <div>
        <Navbar />
        <div className={styles.center}>
    <div style={{padding: 20}}>
  <Card
    image={props.game.background_image}
    header={props.game.title}
  />
  <button>Add Game to Wishlist</button>
    </div>
    </div>
  </div>
)
export default Game