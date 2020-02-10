import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1}><di>MOMS KITCHEN</di></Col>
          <Col xs={12} sm={3} md={2} lg={1}>.</Col>
          <Col xs={12} sm={3} md={2} lg={1}>............................................</Col>
          <Col xs={12} sm={3} md={2} lg={1}>..........................................................................</Col>
        </Row>
      </Container>      
    </div>
  );
}

export default App;
