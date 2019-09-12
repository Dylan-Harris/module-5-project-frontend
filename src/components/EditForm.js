import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Navbar from './Navbar'

class EditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            avatar: '',
            bio: ''
            }
    }

    handleSubmit = (e) => {
        console.log('click')
    }
    render(){
        return(
            <center><div style={{width: 350, position: 'relative' }}>
            <Navbar />
            <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label style={{color: 'white'}}>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label style={{color: 'white'}}>Avatar</label>
      <input placeholder='Avatar' />
    </Form.Field>
    <Form.TextArea placeholder='Edit Bio' />
    <Button type='submit'>Submit</Button>
  </Form>
  </div></center>
        )
    }
}
export default EditForm