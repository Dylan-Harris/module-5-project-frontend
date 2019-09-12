import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {  NavLink } from 'react-router-dom'
import {getProfile} from '../services/backend'
import { connect } from 'react-redux'


 class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        password: ''
      }
    }
  

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
  console.log("click")
  e.preventDefault()
  fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({
          user: this.state
      })
  }, { withCredentials: true })
  .then(res => res.json())
  .then(data => {
    if(data.jwt) {
    localStorage.setItem('jwt', data.jwt)
    // localStorage.setItem('currentUser', JSON.stringify(data.user))
    window.location.href='/Home'
    this.props.fetchEverything()
    }
    else {
      alert(data.error)
      window.location.href = "/"
    }
  })
  
  
}

  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h1' color='brown' textAlign='center'>
      Welcome to Gamer's Paradise
     <Header as='h2' color='brown' textAlign='center'>Log-in to your account</Header>
    
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          required />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <Button color='brown' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <NavLink to="/SignUp">Sign Up</NavLink>
      </Message>
    </Grid.Column>
  </Grid>
    )
  }
}
const mapStateToProps = state => {
  return {logged_user: state.logged_user}
}
export default connect(mapStateToProps)(Login)
