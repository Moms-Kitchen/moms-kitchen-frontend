import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import AlmuerzosComponent from './components/Almuerzos/AlmuerzosComponent';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter'
import MySideBar from './components/MySideBar';
import BillingForm from './components/BillingForm';



function App() {
  const showOrderAlmuerzo = () =>(
      <AlmuerzosComponent></AlmuerzosComponent>
    );
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

      <AlmuerzosComponent
        almuerzos={[{"nombre":"a"},{"nombre":"b"}]}
        showOrderAlmuerzo={showOrderAlmuerzo}
      
      />      
    </div>
  );
}

export default App;
