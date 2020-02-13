import React from 'react';
import { Input } from 'reactstrap';
import BillingForm from './BillingForm';

class BillingDate extends React.Component{
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render(){
        return(
            <Input type="text" placeholder={"Date: " + this.state.date} disabled></Input>
        )
    }
}

export default BillingDate;