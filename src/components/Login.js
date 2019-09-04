import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Route, NavLink, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Login extends React.Component{
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
          user: {
          username: this.state.username,
          password: this.state.password,
          }
      })
  }, { withCredentials: true })
  .then(res => console.log("res from login", res))
  .catch(error => {
      console.log("registration error", error)
  })
}

  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='brown' textAlign='center'>
      Log-in to your account
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

          <NavLink to="/Home"><Button color='brown' fluid size='large'>
            Login
          </Button></NavLink>
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
