import React from 'react';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './components/Login';
import Billing from './components/Billing';


function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Login}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/billing' component={Billing}></Route>
    </BrowserRouter>
  );
}

export default App;
