import React from 'react'
import { Card, Grid, GridColumn } from 'semantic-ui-react'
import Navbar from './Navbar';
import { connect } from 'react-redux'

 class Game extends React.Component{
  constructor(props) {
    super(props)
  }
  handleClick = (e) => {
    console.log("click")
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

const mapStateToProps = state => state.wishlist
export default connect(mapStateToProps)(Game)


