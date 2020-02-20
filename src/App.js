import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import AlmuerzosComponent from './components/Almuerzos/AlmuerzosComponent';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter'
import MySideBar from './components/MySideBar';
import BillingForm from './components/BillingForm';
import { OfferedMenus } from './views/OfferedMenus';



function App() {
  
  return (
    <div className="App">
      {/* <Container>
        <Row>
          <MyHeader></MyHeader>                    
        </Row>
        <Row>
          <MySideBar></MySideBar>
          <BillingForm></BillingForm>
        </Row>
        <Row>
          <MyFooter></MyFooter>
        </Row>
      </Container> */}
      <OfferedMenus></OfferedMenus>     
    </div>
  );
}

export default App;
