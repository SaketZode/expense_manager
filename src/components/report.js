import React, { Component } from "react"
import DatePicker from "react-date-picker";

class Report extends Component {
    state = {
        expenses : []
    }

    getReport = () => {
        fetch("http://127.0.0.1:3004/expenses/", {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json'
            },
        }).then(
            data => data.json()
        ).then(
            data => {
                this.setState({expenses: data})
            }
        );
    }

    render() {
        return(
            <div className="jumbotron" style={{margin:'auto'}}>
                <div>
                    <h1>Report</h1>
                </div>
                <hr/>
                <form action='' method='POST'>
                    <div class="form-group">
                        <label className="col-sm-3 control-label"> From </label>
                        <DatePicker />
                        <br/>
                        <label className="col-sm-3 control-label"> To </label>
                        <DatePicker />
                    </div>
                
                </form>
                <div>
                        <button className="btn btn-primary" onClick={this.getReport}>Get Report</button>
                </div>
                <hr/>
                <div>
                    <table className="table table-bordered table-sm">
                        <thead className="thead-dark">
                            <th>Sr. No.</th>
                            <th>Particulars</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </thead>
                        {this.state.expenses.map(
                            record => {
                                return (
                                    <tr>
                                        <td>{record.id}</td>
                                        <td>{record.particulars}</td>
                                        <td>{record.date}</td>
                                        <td>{record.amount}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}


export default Report