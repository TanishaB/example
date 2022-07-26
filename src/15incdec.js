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
 
  DecrementItem = () => {
    this.setState({ count: this.state.count - 1 });
  }
 
 
  render() {
    return (
      <div class = "center">
        <button class="inc" onClick={this.IncrementItem}>Increment</button>
        <h1>{ this.state.count}</h1>
        <button class="dec" onClick={this.DecrementItem}>Decrement</button>
      </div>
    );
  }
}
 
export default App;