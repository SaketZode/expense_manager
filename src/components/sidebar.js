import '../styles/sidenavstyles.css'
import React, { Component } from "react"
import {Route, BrowserRouter as Router,Switch, Link} from 'react-router-dom';
import NewExpenseEntry from './newexpenseentry';
import Report from './report';
import MonthlyReport from './monthlyreport';
import Udhari from './udhari';

class SideBar extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div className="sidebar">
                        <Link to="newentry">Add New Entry</Link>
                        <Link to="report">Get Report</Link>
                        <Link to="monthlyreport">Get Monthly Report</Link>
                        <Link to="udhari">Udhaari</Link>
                    </div>

                    <div className="content">
                        <Switch>
                            <Route exact path='/newentry' component={NewExpenseEntry}/>
                            <Route exact path='/report' component={Report}/>
                            <Route exact path='/monthlyreport' component={MonthlyReport}/>
                            <Route exact path='/udhari' component={Udhari}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}


export default SideBar