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
            <div className="jumbotron col-sm-5" style={{margin:'auto'}}>
                <h2>Register New User</h2>
                <hr/>
                <form>
                    <label className="col-form-label">First Name</label>
                    <input className='form-control' type='text' onChange={this.handleFname} value={this.state.firstname}/><br/>
                    <label className="col-form-label">Last Name</label>
                    <input className='form-control' type='text' onChange={this.handleLname} value={this.state.lastname}/><br/>
                    <label className="col-form-label">Username</label>
                    <input className='form-control' type='text' onChange={this.handleUsername} value={this.state.username}/><br/>
                    <label className="col-form-label">Email</label>
                    <input className='form-control' type='email' onChange={this.handleEmail} value={this.state.email}/><br/>
                    <label className="col-form-label">Password</label>
                    <input className='form-control' type='password' onChange={this.handlePassword} value={this.state.password}/><br/>
                    
                    <input type='submit' value='SUBMIT' className='btn btn-primary'/>
                </form>
            </div>
        )
    }
}


export default Register