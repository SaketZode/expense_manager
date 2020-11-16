import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Home from './home'
import AboutUs from './aboutus'
import ContactUs from './contactus'
import Register from './register'
import Login from './login'
import SideBar from './sidebar'
import history from '../history'

class RouteComponent extends Component {
    render() {
        return(
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/aboutus' component={AboutUs}/>
                        <Route exact path='/contactus' component={ContactUs}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/welcome' component={SideBar}/>
                    </Switch>
                </Router>
            </div>
        )
    }   
}


export default RouteComponent