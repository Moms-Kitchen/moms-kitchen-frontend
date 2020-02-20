import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter'
import MySideBar from './components/MySideBar';
import BillingForm from './components/BillingForm';

class Billing extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <MyHeader></MyHeader>
                    </Row>
                    <Row>
                        <MySideBar></MySideBar>
                        <BillingForm></BillingForm>
                    </Row>
                    <Row>
                        <MyFooter></MyFooter>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Billing;