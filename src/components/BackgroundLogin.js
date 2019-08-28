import React from 'react'
import Background from '../images/login-background.jpg' 
import { CoverageMap } from 'istanbul-lib-coverage';
import Login from './Login'

const styles = {
    paperContainer: {
        height: 1000,
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: `calc(100vw + 48px)`,
        margin: -24,
        padding: 24
    }
};

export default class BackgroundLogin extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div style={styles.paperContainer}>
            <Login />
            </div>
        )
    }
}