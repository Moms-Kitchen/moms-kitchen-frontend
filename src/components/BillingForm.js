import React from 'react';
import './billingForm.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import BillingDate from './BillingDate'


class BillingForm extends React.Component {
    render() {
        return (
            <div className="billingFormClass generic">
                <Form className="billingGeneric">
                    <FormGroup>
                        <Label for="exampleEmail">Date</Label>
                        <BillingDate></BillingDate>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Resumen</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="Food cost" disabled/>
                        <Input type="text" name="password" id="examplePassword" placeholder="Delivery cost" disabled/>
                        <Input type="text" name="password" id="examplePassword" placeholder="Tip" disabled/>
                        <Input type="text" name="password" id="examplePassword" placeholder="Total" disabled/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Delivery data</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="Address" disabled/>
                        <Input type="text" name="password" id="examplePassword" placeholder="Estimated time" disabled/>                        
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Check me out
                        </Label>      
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default BillingForm;