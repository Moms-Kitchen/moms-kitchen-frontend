import React, { Component } from 'react';
import { Link, Redirect, BrowserRouter } from 'react-router-dom';
import './login.css';
import Billing from './Billing';

class Login extends Component {

    checkUserCredentials() {
        return (
            <Redirect to='/billing'></Redirect>
        );
    }

    render() {
        return (
            <div className="loginClass generic">
                <form>
                    <span>Ain't working yet, just click the login button</span>
                    <input className="loginUsernameClass" placeholder="username" type="text" disabled></input>
                    <input className="loginPasswordClass" placeholder="password" type="password" disabled></input>
                    <button className="loginButtonClass" onClick={this.checkUserCredentials}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;