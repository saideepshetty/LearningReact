import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import Greet from './Greet';
import Message from './Message';
import Counter from './Counter';

class App extends Component {
  render() { 
    return (
      <div className="App">
        {/*<Message></Message>*/}
        <Counter></Counter>
      </div>
    );
  }
}
export default App;
