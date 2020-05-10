import React from 'react';
import './billingForm.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Cookies from 'js-cookie'
import swal from 'sweetalert'
import BillingDate from './BillingDate'


class BillingForm extends React.Component {

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
                this.state.orders.map((order,index)=>{
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
            <div className="billingFormClass generic">
                <div className="billingGeneric" >
                    {this.state.orders.map((order, index) => {
                        return (
                            <div key={index}>
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
                            </div>
                        )
                    })
                    }
                    <hr></hr>
                    <label>Total</label><br></br>
                    <input type="text" placeholder={"Total: $"+this.state.total} disabled></input><br></br>
                    <br></br>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default BillingForm;