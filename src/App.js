import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import LoginTemp from './views/Login'
import Login from './views/Login'
import Kitchen from './views/Kitchen'
import Signup from './views/Signup'

import Billing from './components/Billing'
import Orders from './components/Orders'

import MenuTable from './components/MenuTable'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/Kitchen' component={Kitchen}></Route>

        <Route exact path='/Billing' component={Billing}></Route>
        <Route exact path='/orders' component={Orders}></Route>
        
        <Route exact path='/Menu' component={MenuTable}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
