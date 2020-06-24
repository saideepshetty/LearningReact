import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import Greet from './Greet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce"></Greet>
        <Greet name= "Clark"></Greet>
        <Greet name="Diana"></Greet>
      </div>
    );
  }
}
export default App;
