import React from 'react'
import Forum from '../components/Forum';
import { connect } from 'react-redux'
import  Comments  from '../components/Comments'

class CommentsContainer extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
    return(
        <div>
            {this.props.forums.map((forum, i) => <Comments key={i} forum={forum} />)}
        </div>
    )
}
}

const mapStateToProps = state => ({ forums: state.forums})

export default connect(mapStateToProps)(CommentsContainer)