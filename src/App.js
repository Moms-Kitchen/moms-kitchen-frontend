import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './views/Login';
import Signup from './views/Signup'
import Kitchen from './views/Kitchen';
import ShoppingCart from './views/ShoppingCart';
import Menu from './views/Menu';

import Orders from './components/Orders';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/Kitchen' component={Kitchen}></Route>
        <Route exact path='/ShoppingCart' component={ShoppingCart}></Route>
        <Route exact path='/Menu' component={Menu}></Route>

        <Route exact path='/orders' component={Orders}></Route>        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
