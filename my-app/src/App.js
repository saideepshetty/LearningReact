import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import Greet from './Greet';
import Message from './Message';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Message></Message>
      </div>
    );
  }
}
export default App;
