import React, { Component } from 'react'
import './menuMealForm.css'

export default class MenuMealForm extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        mealsbymatch: [],
        focused: false,
        freetorender: false,
        suggestionshovered: false,
        mealName: '',
    }

    handleMealRemove = () => {
        this.props.parentRemoveMeal(this.props.index);
    }

    async handleMealNameChange(e) {
        var name = e.target.value;
        this.setState({
            freetorender: false,
            mealName: name,
        })
        var url = 'http://localhost:8080/meal/stringmeal/' + name;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(pkg => {
                console.log(pkg)
                this.setState({
                    mealsbymatch: [],
                })
                this.setState({
                    freetorender: true,
                    mealsbymatch: [...this.state.mealsbymatch, ...pkg],
                })
                console.log(this.state.mealsbymatch)
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleMealSelected = (name, id) => {
        console.log(name + "," + id);
        this.setState({
            mealName: name,
        })
        this.props.parentMealName(name, this.props.index);
        this.props.parentMealId(id, this.props.index);
    }

    handleMealPriceChange = (e) => {
        this.props.parentMealPrice(e, this.props.index);
    }

    handleMealDescriptionChange = (e) => {
        this.props.parentMealDescription(e, this.props.index);
    }

    handleOnFocused = () => {
        this.setState({
            focused: true,
        })
    }

    handleOnBlur = () => {
        if (!this.state.suggestionshovered) {
            this.setState({
                focused: false,
            })
        }
    }

    handleSuggestionEnter = () => {
        this.setState({
            suggestionshovered: true,
        })
    }

    handleSuggestionLeave = () => {
        this.setState({
            suggestionshovered: false,
        })
    }

    render() {
        return (
            <div>
                <input className="DMgeneric DMname niceeffect"
                    placeholder="Name of the meal"
                    onFocus={this.handleOnFocused}
                    onBlur={this.handleOnBlur}
                    onChange={(e) => this.handleMealNameChange(e)}
                    value={this.state.mealName}>
                </input><button className="DMgeneric DMmealRemove"
                    onClick={this.handleMealRemove}>Remove meal</button><br></br>
                {this.state.focused && this.state.freetorender && <div onMouseEnter={() => this.handleSuggestionEnter()}
                                onMouseLeave={() => this.handleSuggestionLeave()} className="mealsbymatchclass"> {
                    this.state.mealsbymatch.map((meal, index) => {
                        return (
                            <button 
                                onClick={() => this.handleMealSelected(meal.name, meal.id)}>{meal.name}</button>
                        )
                    })
                } </div>}
                <input className="DMgeneric DMprice niceeffect"
                    placeholder="Price of the meal"
                    onChange={(e) => this.handleMealPriceChange(e)}></input><br></br>
                <textarea className="DMgeneric DMdescription niceeffect"
                    placeholder="A description is optional"
                    onChange={(e) => this.handleMealDescriptionChange(e)}></textarea>
                <hr></hr>
            </div>
        )
    }
}
