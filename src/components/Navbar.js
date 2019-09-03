import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const Navbar = () => (
  <div style={{paddingBottom: 200}}>
    <Menu fixed='top' color='brown' inverted>
      <Container>
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'>Games</Menu.Item>
        <Menu.Item as='a'>Forums</Menu.Item>
        <Menu.Item as='a'>Friends</Menu.Item>
        <Menu.Item as='a' position='right'>Logout</Menu.Item>
      </Container>
    </Menu>
</div>
)

export default Navbar