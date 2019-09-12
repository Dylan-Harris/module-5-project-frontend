import React from 'react'
import { Button, Comment, Form, Header, Icon, Grid } from 'semantic-ui-react'
import Navbar from './Navbar'
import getUsers, { addComment } from '../services/backend'
import { connect } from 'react-redux'
import {getComments} from '../services/backend'

class Comments extends React.Component{
  constructor(props) {
//     const current_user = JSON.parse(localStorage.getItem('currentUser'))
// const {avatar, username, bio, id} = current_user
    super(props)
    this.state = {
    content: '',
    user_id: this.props.users.logged_user.id,
    forum_id: this.props.forum.id
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log("click")
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/comments", {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json", 
        accept: "application/json"
      },
      body: JSON.stringify({
        comment: this.state
      })
    })
    .then(res => res.json())
    .then(getComments().then(data => this.props.dispatch({
      type: 'ADD_COMMENTS',
      data
    })))
    .then(this.props.fetchEverything())
  }
    render() {
      return(
    
  
    <div>
    <Navbar />
    {/* <Comment.Group>
    <Comment>
    {props.forum.comments.map((comment) => <Comment.Avatar as='a' src={comment.user.avatar}/> )}
      <Comment.Content>
      {props.forum.comments.map((comment) => <Comment.Author>{comment.user.username}</Comment.Author>)}
        {props.forum.comments.map((comment) => <Comment.Text>{comment.content}</Comment.Text>)}
        <Comment.Text></Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group> */}

    <center>
      <Grid reversed='computer vertically'>
        <Grid.Row>
          <Grid.Column>
  <Comment.Group>
    <Header style={{color: 'white'}} as='h3' dividing>
      {this.props.forum.title}
    </Header>

    <Comment>
    {/* {this.props.forum.comments.map((comment) => <Comment.Avatar src={comment.user.avatar} />)} */}
      <Comment.Content>
      {/* {this.props.forum.comments.map((comment) => <Comment.Author style={{color: 'white'}} as='a'>-{comment.user.username}</Comment.Author> )} */}
        {this.props.forum.comments.map((comment) => <Comment.Text style={{color: 'white'}}>{comment.content} <Comment.Author style={{color: 'white'}} as='a'>-{comment.user.username}</Comment.Author></Comment.Text>)}
        
      </Comment.Content>
    </Comment>

  

    <Form reply onSubmit={this.handleSubmit}>
      <Form.TextArea onChange={this.handleChange}/>
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </center>
  </div>
      )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Comments)