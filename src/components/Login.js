import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';

class Login extends Component {

    state = {
        authenticated: false,
    }

    checkUserCredentials = () => {
        //Most autheticate the user credential before changing the state TODO.
        this.setState({
            authenticated: true
        })
    }

    render() {           
        return (   
            <React.Fragment>   
            {this.state.authenticated && <Redirect to='/orders'></Redirect>}           
            <div className="loginClass generic">
                <form>
                    <span>Ain't working yet, just click the login button</span>
                    <input className="loginUsernameClass" placeholder="username" type="text" disabled></input>
                    <input className="loginPasswordClass" placeholder="password" type="password" disabled></input>
                    <button className="loginButtonClass" onClick={this.checkUserCredentials}>Login</button>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default Login;