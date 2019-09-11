import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Background from '../images/login-background.jpg'
import { connect } from 'react-redux'


class UserCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }
    render() {
// const current_user = JSON.parse(localStorage.getItem('currentUser'))
// const {avatar, username, bio} = current_user
      
      // let user = this.props.users.logged_user.user
      // console.log(user.avatar)
      // console.log(this.props.users.logged_user.avatar)
        return(
            <Card style={{marginTop: 150, marginLeft: 75}}>
    <Image src={this.props.users.logged_user.avatar} wrapped ui={true} />
    <Card.Content>
      <Card.Header>{this.props.users.logged_user.username}</Card.Header>
      <Card.Description>
        {this.props.users.logged_user.bio}
      </Card.Description>
    </Card.Content>
  </Card>
        )
    }
}


const mapStateToProps = state => state
export default connect(mapStateToProps)(UserCard)