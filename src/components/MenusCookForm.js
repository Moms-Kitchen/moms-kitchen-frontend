import React, { Component } from 'react'
import { useTrail, animated } from "react-spring"
import "./menusCookForm.css"
import Cookies from 'js-cookie'
import swal from 'sweetalert';

export default class MenusCookForm extends Component {

    state = {
        menus: [],
        meals: [],
        //menutosend: { id: 15, chef: Cookies.getJSON('cook'), meals: this.state.meals, price: 0, description: ""},
             
    }

    componentDidMount() {
        const cook = Cookies.getJSON('cook');
        console.log(cook.id);
        var url = 'https://momskitchenieti.herokuapp.com/menus/chef/' + cook.id;
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
        this.setState({ meals: [...this.state.meals, { name: "", description: "", price: "" }] });
    }


    handleMenuPriceChange(e){

    }

    handleMenuDescriptionChange(e){

    }

    handleMenuNameChange(e){

    }

    handleMealNameChange(e, index) {
        this.state.meals[index].name = e.target.value;
        this.setState({ meals: this.state.meals })
    }

    handleMealPriceChange(e, index) {
        this.state.meals[index].price = e.target.value;
        this.setState({ meals: this.state.meals })
    }

    handleMealDescriptionChange(e, index) {
        this.state.meals[index].description = e.target.value;
        this.setState({ meals: this.state.meals })
    }

    handleRemove(index) {
        this.state.meals.splice(index, 1);
        this.setState({ meals: this.state.meals })
    }

    // createNewMenu(){
    //     if(this.state.menutosend.id !== "" && this.state.menutosend.price !== 0 && this.state.menutosend.meals.length > 0){
    //         fetch('https://momskitchenieti.herokuapp.com/menus/createMenu', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(this.state.menutosend)
    //         })
    //             .then(response => {
    //                 if (response.ok) {
    //                     swal.fire(
    //                         'Successfully created!',
    //                         'You menu have been registered!',
    //                         'success'
    //                     )
    //                 } else {
    //                     swal.fire(
    //                         'Sorry!',
    //                         'Someting went wrong, try again!',
    //                         'error')
    //                 }
    //             })
    //     } else {
    //         swal("Empty field!", "Only the descritionis optional", "error");
    //     }
    // }

    showMeals() {
        console.log(this.state.meals);
    }


    render() {
        return (
            <div className="menusCookClass" >
                <div className="addNewMenuFormClass" >
                    <h2> Add new menu </h2>
                    <div className="menuNPDform">
                        <label className="addmenulabelgeneric">Cost: </label><input className="ANMcostClass addmenuinputgeneric niceeffect" onChange={(e) => this.handleMenuPriceChange(e)} placeholder="Cost" ></input><br></br>
                        <label className="addmenulabelgeneric amlgBottom">Description: </label><textarea className="ANMcostClass addmenuinputgeneric niceeffect" onChange={(e) => this.handleMealDescriptionChange(e)} placeholder="description" ></textarea><br></br>
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
                                <input className="DMgeneric DMname niceeffect" placeholder="Name of the meal" onChange={(e) => this.handleMealNameChange(e, index)} ></input><button className="DMgeneric DMmealRemove" onClick={(e) => this.handleRemove(e, index)}>Remove meal</button><br></br>
                                <input className="DMgeneric DMprice niceeffect" placeholder="Price of the meal" onChange={(e) => this.handleMealPriceChange(e, index)}></input><br></br>
                                <textarea className="DMgeneric DMdescription niceeffect" placeholder="A description is optional" onChange={(e) => this.handleMealDescriptionChange(e, index)}></textarea>
                                <hr></hr>
                            </div>
                        )
                    })}
                    <button onClick={(e) => this.addMeal(e)}> Add meal </button>
                    <hr></hr>
                    <button onClick={(e) => this.showMeals(e)}> Add menu </button>
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