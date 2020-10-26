import React, { Component } from "react"


class Register extends Component {
    state = {
        firstname : '',
        lastname : '',
        username : '',
        email : '',
        password : ''
    }

    handleFname = event => {
        this.setState(
            {firstname: event.target.value}
        )
    }

    handleLname = event => {
        this.setState(
            {lastname: event.target.value}
        )
    }

    handleUsername = event => {
        this.setState(
            {username: event.target.value}
        )
    }

    handleEmail = event => {
        this.setState(
            {email: event.target.value}
        )
    }

    handlePassword = event => {
        this.setState(
            {password: event.target.value}
        )
    }

    render() {
        return(
            <div className="container">
                <h1>Register</h1>    
            </div>
        )
    }
}


export default Register