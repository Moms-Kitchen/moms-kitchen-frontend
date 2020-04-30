import React, { Component } from 'react'
import SockJsClient from 'react-stomp'
import { useTrail, animated } from "react-spring"
import MenuMealForm from './MenuMealForm'
import "./menusCookForm.css"
import Cookies from 'js-cookie'
import swal from 'sweetalert'

export default class MenusCookForm extends Component {

    state = {
        menus: [],
        meals: [],
        mealsbymatch: [],
    }

    menutosend = { id: 15, chef: Cookies.getJSON('cook'), meals: this.state.meals, price: 0, description: "" };

    componentDidMount() {
        const cook = Cookies.getJSON('cook');
        console.log(cook.id);
        var url = 'http://localhost:8080/menus/chef/' + cook.id;
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
                
            })
            .catch(err => {
                console.log(err);
            });
    }

    addMeal() {
        this.setState({ meals: [...this.state.meals, {id: "", name: "", description: "", price: "" }] });
    }


    handleMenuPriceChange(e) {
        this.menutosend.price = e.target.value;
        this.setState({ menutosend: this.state.menutosend });
    }

    handleMenuDescriptionChange(e) {
        this.menutosend.description = e.target.value;
        this.setState({ menutosend: this.state.menutosend });
    }

    handleMealIdChange = (id,index) => {
        this.state.meals[index].id = id;
        this.setState({ meals: this.state.meals });
    }

    handleMealNameChange = (name, index) => {

        this.state.meals[index].name = name;
        this.setState({ meals: this.state.meals });
    }

    handleMealPriceChange = (e, index) => {
        this.state.meals[index].price = e.target.value;
        this.setState({ meals: this.state.meals });
    }

    handleMealDescriptionChange = (e, index) => {
        this.state.meals[index].description = e.target.value;
        this.setState({ meals: this.state.meals });
    }

    handleRemove = (index) => {
        this.state.meals.splice(index, 1);
        this.setState({ meals: this.state.meals });
    }

    async createNewMenu() {
        this.menutosend.meals = this.state.meals;
        console.log(this.menutosend)
        if (this.menutosend.id !== "" && this.menutosend.price !== 0 && this.menutosend.meals.length > 0) {
            fetch('http://localhost:8080/menus/createMenu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.menutosend)
            })
                .then(response => {
                    if (response.ok) {
                        swal(
                            'Successfully created!',
                            'You menu have been registered!',
                            'success'
                        )
                    } else {
                        swal(
                            'Sorry!',
                            'Someting went wrong, try again!',
                            'error')
                    }
                })
        } else {
            swal("Empty field!", "Only the descrition is optional", "error");
        }
    }

    async addMenu(){
        await this.createNewMenu();
        this.sendMessage("check");
    }

    showMeals() {
        console.log(this.state.meals);
    }

    sendMessage = (msg) => {
        console.log("SOCKET:sending message... ")
        this.clientRef.sendMessage('/app/createMenu.{Menu}', msg);
      }

    render() {
        return (
            <div className="menusCookClass" >
                <SockJsClient url={'http://localhost:8080/stompendpoint'}
                topics={["/topic/Menus"]}
                onMessage={(msg) => {console.log("socket msg:" + msg)}}
                onConnect={console.log("Socket Connected!")}
                onDisconnect={console.log("Socket Disconnected!")}
                ref={ (client) => { this.clientRef = client }}
                >
                </SockJsClient>
                <div className="addNewMenuFormClass" >
                    <h2> Add new menu </h2>
                    <div className="menuNPDform">
                        <label className="addmenulabelgeneric">Cost: </label><input className="ANMcostClass addmenuinputgeneric niceeffect" onChange={(e) => this.handleMenuPriceChange(e)} placeholder="Cost" ></input><br></br>
                        <label className="addmenulabelgeneric amlgBottom">Description: </label><textarea className="ANMcostClass addmenuinputgeneric niceeffect" onChange={(e) => this.handleMenuDescriptionChange(e)} placeholder="Description - OPTIONAL" ></textarea><br></br>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h3> Menu meals </h3><br></br>
                    {this.state.meals.map((meal, index) => {
                        return (
                            <div key={index}>
                                <MenuMealForm parentMealId={this.handleMealIdChange}
                                    parentMealName={this.handleMealNameChange}
                                    parentMealPrice={this.handleMealPriceChange}
                                    parentMealDescription={this.handleMealDescriptionChange}
                                    parentRemoveMeal={this.handleRemove}
                                    meals={this.state.mealsbymatch}
                                    index={index}>
                                </MenuMealForm>
                            </div>
                        )
                    })}
                    <button onClick={(e) => this.addMeal(e)}> Add meal </button>
                    <hr></hr>
                    <button onClick={(e) => this.addMenu(e)}> Add menu </button>
                    <hr></hr>
                    <br></br>
                    <h2>Your menus</h2>
                    <hr></hr>
                </div>
                <div className="menuCookContainer" >
                    {this.state.menus.length === 0 && <div className="noMenusYetClass"><h4>You don´ t have any menus yet!</h4></div>}
                    {this.state.menus.length > 0 &&
                        this.state.menus.map((menu, index) => {
                            return (
                                <div key={index} className="menuCont">
                                    <h6>Description</h6><br></br>
                                    <label>{menu.description}</label>
                                    <h6>Price</h6><br></br>
                                    <label>{menu.price}</label>
                                    <div className="menuMealsCookContainer">
                                        {menu.meals.map((meal) => {
                                            return (
                                                <div key={index} className="mealCont">
                                                    <div><label className="mealContlabel"><h6>Name:</h6></label>{meal.name}</div>
                                                    <div><label className="mealContlabel"><h6>Price:</h6></label>{meal.price}</div>
                                                    <div><label className="mealContlabel"><h6>Description:</h6></label>{meal.description}</div>
                                                </div>
                                            )
                                        })}
                                    </div><br></br>
                                    <button className="activateMenuBtn">Post menu</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}