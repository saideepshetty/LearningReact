import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import Greet from './Greet';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Greet name="Bruce"> Wayne</Greet>
        <Greet name= "Clark"> Kent</Greet>
        <Greet name="Diana"> Prince</Greet>
      </div>
    );
  }
}
export default App;
