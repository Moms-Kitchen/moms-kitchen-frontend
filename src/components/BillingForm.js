import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, CardDeck, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import NumberFormat from 'react-number-format';

import './billingForm.css';
import BillingDate from './BillingDate';


class BillingForm extends Component {

    state = {
        orders: [],
        total: 0,
    }

    componentDidMount() {
        var url = 'http://localhost:8080/orders/cart/' + Cookies.getJSON('cook').id;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(pkg => {
                console.log(pkg);
                this.setState({ orders: [...this.state.orders, ...pkg] })
                console.log(this.state.orders);
                console.log("Protocol: " + window.location.protocol);
                this.state.orders.map((order, index) => {
                    var tmp = this.state.total;
                    this.setState({
                        total: tmp + order.menus[0].price,
                    })
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="billing" >

                <h2>Carrito de Compras</h2>
                <div className="carritoCompras">
                    {this.state.orders.map((order, index) => {
                        return (
                            <div key={index}>
                                <Card className="boxShadowPro">
                                    <Card.Header>Menú # {index + 1}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Fecha:</Card.Title>
                                        <Card.Text>
                                            Para ver tus menús, primero debes crear uno.
                                        </Card.Text>

                                        <Card.Title>Resumen:</Card.Title>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridName">
                                                    <Form.Label>Chef</Form.Label>
                                                    <Form.Control disabled type="text" placeholder={order.menus[0].chef.name} />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridRating">
                                                    <Form.Label>Calificación</Form.Label>
                                                    <Form.Control disabled type="text" placeholder={order.menus[0].chef.rating} />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridPhone">
                                                    <Form.Label>Celular</Form.Label>
                                                    <Form.Control disabled type="text" placeholder={order.menus[0].chef.phone} />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridChefAddress">
                                                    <Form.Label>Dirección del Chef</Form.Label>
                                                    <Form.Control disabled type="text" placeholder={order.menus[0].chef.address} />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridMenu">
                                                    <Form.Label>Menú</Form.Label>
                                                    <Form.Control disabled type="text" placeholder={order.menus[0].name} />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPrecio">
                                                    <Button size="lg" block variant="warning" className="buttonCard font-weight-bold">
                                                        <NumberFormat value={order.menus[0].price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                    </Button>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>

                                        <Card.Title>Información de Entrega:</Card.Title>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridUserAddress">
                                                    <Form.Label>Dirección de Entrega</Form.Label>
                                                    <Form.Control disabled type="text" placeholder={Cookies.getJSON('cook').address} />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridTime">
                                                    <Form.Label>Tiempo de Entrega</Form.Label>
                                                    <Form.Control disabled type="text" placeholder="15 minutos" />
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>

                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Avisarme"
                                        />
                                    </Card.Body>
                                </Card>

                                {/** 
                                <hr></hr>
                                <div>
                                    <label for="exampleEmail">Date</label><br></br>
                                    <BillingDate></BillingDate>
                                </div><br></br>
                                <div>

                                    <label for="examplePassword">Resumen</label><br></br>
                                    <input type="text" placeholder={"Chef: " + order.menus[0].chef.name} disabled />
                                    <input type="text" placeholder={"Chef address: " + order.menus[0].chef.address} disabled />
                                    <input type="text" placeholder={order.menus[0].description} disabled />
                                    <input type="text" placeholder={"Cost: $" + order.menus[0].price} disabled />
                                </div><br></br>
                                <div>
                                    <label for="exampleSelect">Delivery data</label><br></br>
                                    <input type="text" placeholder={"Address to deliver: " + Cookies.getJSON('cook').address} disabled />
                                    <input type="text" placeholder="10 minutes" disabled />
                                </div>
                                <div check>
                                    <label check>
                                        <input type="checkbox" />{' '}
                                        Check me out
                                    </label>
                                </div>
                                */}
                            </div>
                        )
                    })
                    }
                    
                    <h3>Valor Total</h3>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalTotal">
                            <Form.Label column sm={2} md={2} lg={2} xl={1} className="ml-auto">Total del carrito:</Form.Label>
                            <Col sm={10} md={10} lg={7} xl={6} className="mr-auto">
                                <Form.Control disabled type="text" placeholder={this.state.total} />
                            </Col>
                        </Form.Group>
                    </Form>

                    <Button size="lg" href="Kitchen" variant="success" style={{ border: 'medium solid black' }} className="buttonForm boxShadowPro font-weight-bold">Pagar</Button>

                </div>
            </div >

        )
    }
}

export default BillingForm;