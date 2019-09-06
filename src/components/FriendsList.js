import React from 'react'
import { Item } from 'semantic-ui-react'
import Navbar from './Navbar';

const FriendsList = () => (
    <div>
    <Navbar />
  <Item.Group divided>
    <Item>
      <Item.Image src='/images/wireframe/image.png' />
    </Item>

    <Item>
      <Item.Image src='/images/wireframe/image.png' />
    </Item>

    <Item image='/images/wireframe/image.png' />
  </Item.Group>
  </div>
)

export default FriendsList