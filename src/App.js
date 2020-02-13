import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter'
import MySideBar from './components/MySideBar';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <MyHeader></MyHeader>                    
        </Row>
        <Row>
          <MySideBar></MySideBar>
        </Row>
        <Row>
          <MyFooter></MyFooter>
        </Row>
      </Container>      
    </div>
  );
}

export default App;
