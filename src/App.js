import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Billing from './components/Billing'
import Orders from './components/Orders'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/billing' component={Billing}></Route>
        <Route exact path='/orders' component={Orders}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
