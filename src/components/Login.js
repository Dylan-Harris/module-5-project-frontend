import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
      }
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
          required />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            required
          />

          <Button color='brown' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
    )
  }
}
