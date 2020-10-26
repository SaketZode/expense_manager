import React, { Component } from "react"


class Login extends Component {
    state = {
        email : '',
        password : ''
    }
    render() {
        return(
            <div className="container-fluid" style={{width: 500, backgroundColor:"beige", marginTop:20}}>
                <h2>Login Credentials</h2>
                <div class="panel-group">
                    <div class="panel panel-default"></div>
                </div>
                <form>
                    <label>Email</label><input className='form-control' type='email' onChange={this.handleEmail} value={this.state.email}/><br/>
                    <label>Password</label><input className='form-control' type='password' onChange={this.handlePassword} value={this.state.password}/><br/>
                    
                    <input type='submit' value='Login' className='btn btn-primary'/>
                </form>
                <hr/>
            </div>
        )
    }
}


export default Login