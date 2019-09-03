import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            bio: '',
            avatar: ''
        }
    }

    handleSubmit = (e) => {
        console.log("form submitted")
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                username: this.state.username,
                password: this.state.password,
                bio: this.state.bio,
                avatar: this.state.avatar
                }
            })
        }, { withCredentials: true })
        .then(res => res.json())
        .catch(error => {
            console.log("registration error", error)
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='brown' textAlign='center'>
          Create Your Profile
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              type='username'
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
              required />
              <Form.Input
                fluid icon='lock'
                iconPosition='left'
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Form.Input 
              type='bio'
              name='bio'
              placeholder='Bio'
              value={this.state.bio}
              onChange={this.handleChange}
              required />
              <Form.Input 
              fluid icon='image' 
              iconPosition='left' 
              type='avatar'
              name='avatar'
              placeholder='Avatar'
              value={this.state.avatar}
              onChange={this.handleChange}
              required />
              
    
              <Button color='brown' fluid size='large'>
                Create Profile
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
        )
      }
    }

//     render() {
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input 
//                     type="username" 
//                     name="username" 
//                     placeholder="username" 
//                     value={this.state.username} 
//                     onChange={this.handleChange} 
//                     required
//                     />
//                     <input 
//                     type="password" 
//                     name="password" 
//                     placeholder="Password" 
//                     value={this.state.password} 
//                     onChange={this.handleChange} 
//                     required
//                     />
//                      <input 
//                     type="bio" 
//                     name="bio" 
//                     placeholder="Bio" 
//                     value={this.state.bio} 
//                     onChange={this.handleChange} 
//                     required
//                     />
//                       <input 
//                     type="avatar" 
//                     name="avatar" 
//                     placeholder="Avatar" 
//                     value={this.state.avatar} 
//                     onChange={this.handleChange} 
//                     required
//                     />

//                    <button type="submit">SignUp</button> 
//                 </form>
//             </div>
//         )
//     }
// }