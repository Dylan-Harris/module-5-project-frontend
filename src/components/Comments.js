import React from 'react'
import { Button, Comment, Form, Header, Icon, Grid } from 'semantic-ui-react'
import Navbar from './Navbar'
import getUsers from '../services/backend'

const Comments = (props) => (
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

    {/* <center>
      <Grid reversed='computer vertically'>
        <Grid.Row>
          <Grid.Column>
  <Comment.Group>
    <Header style={{color: 'white'}} as='h3' dividing>
      {props.forum.title}
    </Header>

    <Comment>
    {props.forum.comments.map((comment) => <Comment.Avatar src={comment.user.avatar} />)}
      <Comment.Content>
      {props.forum.comments.map((comment) => <Comment.Author style={{color: 'white'}} as='a'>{comment.user.username}</Comment.Author> )}
        <Comment.Author style={{color: 'white'}} as='a'></Comment.Author>
        {props.forum.comments.map((comment) => <Comment.Text style={{color: 'white'}}>{comment.content}</Comment.Text>)}
        
      </Comment.Content>
    </Comment>

   

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </center> */}
  </div>
)


export default Comments