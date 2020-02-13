import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
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
          <MyFooter></MyFooter>
        </Row>
      </Container>

      <AlmuerzosComponent
        almuerzos={[{"nombre":"a"},{"nombre":"b"}]}
        /* showOrderAlmuerzo={this.showOrderAlmuerzo} */
      
      />      
    </div>
  );
}

export default App;
