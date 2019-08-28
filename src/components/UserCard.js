import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Background from '../images/login-background.jpg'

const UserCard = () => (
  <Card style={{marginTop: 150, marginLeft: 75}}>
    <Image src={Background} wrapped ui={true} />
    <Card.Content>
      <Card.Header>DH_05</Card.Header>
      <Card.Description>
        Hey what's up?
      </Card.Description>
    </Card.Content>
  </Card>
)

export default UserCard