import logo from './logo.svg';
import './App.css';
import React from 'react';
import { idText } from 'typescript';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  IncrementItem = () => {
    this.setState({ count: this.state.count + 1 });
  }


  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Increment</button>
        <h1>{ this.state.count}</h1>
      </div>
    );
  }
}

export default App;
