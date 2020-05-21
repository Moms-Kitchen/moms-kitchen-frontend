import React, { Component } from 'react'
import SockJsClient from 'react-stomp'
import Cookies from 'js-cookie'
import swal from 'sweetalert'
import BillingDate from './BillingDate'
import './orderForm.css'


export default class OrderForm extends Component {

    state = {
        orders: [],
    }    

    componentDidMount(){
        var url = 'http://localhost:8080/orders/chef/' + Cookies.getJSON('cook').id;
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
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="orderFormClass">
                {/* <SockJsClient url='http://localhost:8080/'
                topics={["/topic"]}
                onConnect={console.log("Socket Connected!")}
                onDisconnect={console.log("Socket Disconnected!")}
                ref={ (client) => { this.clientRef = client }}
                >
                </SockJsClient> */}
                {this.state.orders.length > 0 && 
                    this.state.orders.map((order,index) => {
                        console.log(order)
                        return(
                            <div key={index}>
                                <hr></hr>
                                <div>
                                    <label>Date</label><br></br>
                                    <BillingDate></BillingDate>
                                </div><br></br>
                                <div>
                                    <label>Resumen</label><br></br>                                   
                                    <input type="text" placeholder={"Chef: " + order.customer.name} disabled />
                                    <input type="text" placeholder={"Chef address: " + order.menus[0].chef.address} disabled />                                    
                                    <input type="text" placeholder={order.menus[0].description} disabled />
                                    <input type="text" placeholder={"Cost: $" + order.menus[0].price} disabled />
                                </div><br></br>
                                <div>
                                    <label>Delivery data</label><br></br>
                                    <input type="text" placeholder={"Address to deliver: " + Cookies.getJSON('cook').address} disabled />
                                    <input type="text" placeholder="10 minutes" disabled />
                                </div>
                            </div>
                        )
                    })
                }
                {this.state.orders.length === 0 &&
                <div>
                    <h4>
                        There is no orders yet
                    </h4>
                </div>
                }
            </div>
        )
    }
}