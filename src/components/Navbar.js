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
import { Route, NavLink, Link, BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => (
  <div style={{paddingBottom: 200}}>
    <Menu fixed='top' color='brown' inverted>
      <Container>
        <NavLink to="/Home"><Menu.Item as='a'>Home</Menu.Item> </NavLink>
        <NavLink to="/Games"><Menu.Item as='a'>Games</Menu.Item></NavLink>
        <Menu.Item as='a'>Forums</Menu.Item>
        <Menu.Item as='a'>Friends</Menu.Item>
        <Menu.Item as='a' position='right'>Logout</Menu.Item>
      </Container>
    </Menu>
</div>
)

export default Navbar