import React from 'react'
import Forum from '../components/Forum';
import { connect } from 'react-redux'
import  Comments  from '../components/Comments'

const ForumsContainer = (props) => {
    return(
        <div>
            {props.forums.map((forum, i) => <Forum key={i} forum={forum}/>)}
        </div>
    )
}

const mapStateToProps = state => ({ forums: state.forums.forums})

export default connect(mapStateToProps)(ForumsContainer)