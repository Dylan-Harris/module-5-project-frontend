import React from 'react'
import { Card, Grid, GridColumn } from 'semantic-ui-react'
import Navbar from './Navbar';
import { connect } from 'react-redux'

 export default class Game extends React.Component{
  constructor(props) {
    super(props)
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
  <button>Add Game to Wishlist</button>
    </div>
    </div>
  </div>
    )
  }
}


