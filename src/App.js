import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import MenusRegister from './components/MenusRegister';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter'
import MySideBar from './components/MySideBar';
import BillingForm from './components/BillingForm';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <MyHeader></MyHeader>                    
        </Row>
        <Row>
          <MySideBar></MySideBar>
          <BillingForm></BillingForm>
        </Row>
        <Row>
          <MenusRegister></MenusRegister>
        </Row>
        <Row>
          <MyFooter></MyFooter>
        </Row>
      </Container>      
    </div>
  );
}

export default App;