import React from 'react';
import { Input } from 'reactstrap';

class BillingDate extends React.Component{
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getHours()+ ':' + today.getMinutes();

        this.state = {
            date: date
        };
    }

    render(){
        return(
            <input type="text" placeholder={"Date: " + this.state.date} disabled></input>
        )
    }
}

export default BillingDate;