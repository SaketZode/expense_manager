import React, { Component } from "react"

class NewExpenseEntry extends Component {
    state = {
        particulars: "",
        date: "",
        amount: 0
    }

    handleParticulars = event => {
        this.setState(
            {particulars: event.target.value}
        )
    }

    handleDate = event => {
        this.setState(
            {date: event.target.value}
        )
    }

    handleAmount = event => {
        this.setState(
            {amount: event.target.value}
        )
    }
    render() {
        return(
            <div className="jumbotron col-sm-6" style={{margin:'auto'}}>
                <h2>New Expense Entry</h2> 
                <hr/>
                
                <form>
                    <label className="col-form-label">Particulars</label>
                    <input type="text" className="form-control" onChange={this.handleParticulars} value={this.state.particulars}/>
                    <label className="col-form-label">Date</label>
                    <input type="date" className="form-control" onChange={this.handleDate} value={this.state.date}/>
                    <label className="col-form-label">Amount</label>
                    <input type="number" className="form-control" onChange={this.handleAmount} value={this.state.amount}/><br/>
                        
                    <input type='submit' value='Create Entry' className='btn btn-primary'/>
                </form>
                
            </div>
        )
    }
}


export default NewExpenseEntry