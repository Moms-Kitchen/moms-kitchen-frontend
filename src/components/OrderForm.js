import React, { Component } from 'react'
import SockJsClient from 'react-stomp'
import './orderForm.css'


export default class OrderForm extends Component {

    state = {
        orders: [],
    }    

    render() {
        return (
            <div className="orderFormClass">
                <SockJsClient url='http://localhost:8080/'
                topics={["/topic"]}
                onConnect={console.log("Socket Connected!")}
                onDisconnect={console.log("Socket Disconnected!")}
                ref={ (client) => { this.clientRef = client }}
                >
                </SockJsClient>
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