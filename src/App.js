import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlmuerzosComponent from './components/Almuerzos/AlmuerzosComponent';

/* showOrderAlmuerzo =() =>{
  return "test";
} */

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AlmuerzosComponent
        almuerzos={[{"nombre":"a"},{"nombre":"b"}]}
        /* showOrderAlmuerzo={this.showOrderAlmuerzo} */
      
      />
    </div>
  );
}

export default App;
