import React, { Component } from 'react'
import SockJsClient from 'react-stomp'
import Cookies from 'js-cookie'
import swal from 'sweetalert'
import './menusCustomer.css'

export default class MenusCustomer extends Component {

    state = {
        menus: [],
    }

    componentDidMount() {
        var url = 'http://localhost:8080/menus/list';
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(pkg => {
                console.log(pkg);
                this.setState({ menus: [...this.state.menus, ...pkg] })
                console.log(this.state.menus);
                console.log("Protocol: " + window.location.protocol);
            })
            .catch(err => {
                console.log(err);
            });
    }    

    async createNewOrder(e, index) {
        var ordertosend = {
            id: 0, 
            totalPrice: this.state.menus[index].price,
            menus: [this.state.menus[index]], 
            orderDate: new Date(), 
            description: "new order for " + Cookies.getJSON('cook').name,
            Customer: Cookies.getJSON('cook'),
            Chef: this.state.menus[index].chef,
            pendingPayment: true,
        }
        console.log(ordertosend);
        fetch('http://localhost:8080/orders/createOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ordertosend)
        })
            .then(response => response.json()).then(pkg => {
                if (pkg) {
                    swal(
                        'Successfully added!',
                        'Menu added to your cart!',
                        'success'
                    )                    
                } else {
                    swal(
                        'Sorry!',
                        'Someting went wrong, try again!',
                        'error')
                }
            })
    }

    render() {
        return (
            <div className="menusCustomerClass">
                <SockJsClient url={'http://localhost:8080/stompendpoint'}
                    topics={["/topic/Menus"]}
                    onMessage={(msg) => {
                        console.log("socket msg:" + msg.length);
                        this.setState({ menus: [] })
                        this.setState({ menus: [...this.state.menus, ...msg] })
                        console.log(this.state.menus)
                    }}
                    onConnect={console.log("Socket Connected!")}
                    onDisconnect={console.log("Socket Disconnected!")}
                >
                </SockJsClient>
                <div className="menusCustomerContainer">
                    {this.state.menus.length === 0 && <div className="noMenusYetClass"><h4>You don´ t have any menus yet!</h4></div>}
                    {this.state.menus.length > 0 &&
                        this.state.menus.map((menu, index) => {
                            return (
                                <div key={index} className="menuContCustomer">
                                    <h6>Chef</h6><br></br>
                                    <label>{menu.chef.name}</label>
                                    <h6>Description</h6><br></br>
                                    <label defaultValue="No description">{menu.description}</label>
                                    <h6>Price</h6><br></br>
                                    <label>{menu.price}</label>
                                    <div className="menuMealsCookContainer">
                                        {menu.meals.map((meal, index) => {
                                            return (
                                                <div key={index} className="mealCont">
                                                    <div><label className="mealContlabel"><h6>Name:</h6></label>{meal.name}</div>
                                                    <div><label className="mealContlabel"><h6>Price:</h6></label>{meal.price}</div>
                                                    <div><label className="mealContlabel"><h6>Description:</h6></label><textarea disabled style={{ resize: 'none', width: '50%' }}>{meal.description}</textarea></div>
                                                </div>
                                            )
                                        })}
                                    </div><br></br>
                                    <button className="activateMenuBtn" onClick={(e => this.createNewOrder(e,index))}>Purchase</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
