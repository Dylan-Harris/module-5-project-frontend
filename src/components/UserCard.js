import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Background from '../images/login-background.jpg'


export default class UserCard extends React.Component {
    render() {
const current_user = JSON.parse(localStorage.getItem('currentUser'))
const {avatar, username, bio} = current_user
        return(
            <Card style={{marginTop: 150, marginLeft: 75}}>
    <Image src={avatar} wrapped ui={true} />
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Description>
        {bio}
      </Card.Description>
    </Card.Content>
  </Card>
        )
    }
}