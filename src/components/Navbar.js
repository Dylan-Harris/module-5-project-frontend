import React from 'react'
import { Container, Menu, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const logout = () => {
    if(localStorage.length !== 0) {
        localStorage.clear()
        alert('You have been successfully logged out.')
        window.location.href = '/'
    }
}

const loginButtonDisplay = () => {
    if(localStorage.length === 0) {
      return <Link to='/'>Login</Link>
    } 
    else {
      return <Link to='/' onClick={logout}>Logout</Link>
    }
}

const Navbar = () => (
  <div style={{paddingBottom: 100}}>
    <Menu fixed='top' color='brown' inverted>
      <Container>
        <Menu.Item 
        as={Link} 
        to="/Home">Home
        </Menu.Item> 
        <Menu.Item as={Link} to="/Games">Games
        </Menu.Item>
        <Menu.Item 
        to="/Forums" 
        as={Link}>Forums
        </Menu.Item>
        <Menu.Item 
        as={Link} 
        to="/Friends">Friends
        </Menu.Item>
        <Menu.Item as={Link} to="/" position='right'>{loginButtonDisplay()}</Menu.Item>
      </Container>
    </Menu>
</div>
)

export default Navbar