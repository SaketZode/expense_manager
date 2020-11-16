import React, { Component } from "react"
import history from "../history"


class Login extends Component {
    state = {
        email : '',
        password : ''
    }

    handleLogin = () => {
        history.push('/welcome')
    }

    render() {
        return(
            <div className="jumbotron col-sm-5" style={{margin: 'auto'}}>
                <h2>Login Credentials</h2>
                <hr/>
                <div class="panel-group">
                    <div class="panel panel-default"></div>
                </div>
                <form>
                    <label>Email</label>
                    <input className='form-control' type='email' onChange={this.handleEmail} value={this.state.email}/><br/>
                    <label>Password</label>
                    <input className='form-control' type='password' onChange={this.handlePassword} value={this.state.password}/><br/>
                    
                    <input type='submit' value='Login' onClick={this.handleLogin} className='btn btn-primary'/>
                </form>
            </div>
        )
    }
}


export default Login