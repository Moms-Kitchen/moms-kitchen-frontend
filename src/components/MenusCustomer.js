import React, { Component } from 'react'
import './menusCustomer.css'

export default class MenusCustomer extends Component {

    state={
        menus: [],        
    }

    componentDidMount(){
        var url = 'https://momskitchenieti.herokuapp.com/menus/list';
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


    render() {
        return (
            <div className="menusCustomerClass">
                <div className="menusCustomerContainer">
                {this.state.menus.length === 0 && <div className="noMenusYetClass"><h4>You don´ t have any menus yet!</h4></div>}
                    {this.state.menus.length > 0 &&
                        this.state.menus.map((menu, index) => {
                            return (
                                <div key={index} className="menuContCustomer">
                                    <h6>Description</h6><br></br>
                                    <label defaultValue="No description">{menu.description}</label>
                                    <h6>Price</h6><br></br>
                                    <label>{menu.price}</label>
                                    <div className="menuMealsCookContainer">
                                        {menu.meals.map((meal) => {
                                            return (
                                                <div key={index} className="mealCont">
                                                    <div><label className="mealContlabel"><h6>Name:</h6></label>{meal.name}</div>
                                                    <div><label className="mealContlabel"><h6>Price:</h6></label>{meal.price}</div>
                                                    <div><label className="mealContlabel"><h6>Description:</h6></label><textarea disabled style={{resize: 'none', width: '50%'}}>{meal.description}</textarea></div>
                                                </div>
                                            )
                                        })}
                                    </div><br></br>
                                    <button className="activateMenuBtn">Purchase</button>
                                </div>
                            )
                        })
                    }
                </div>                
            </div>
        )
    }
}