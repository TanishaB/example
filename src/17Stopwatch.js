import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      hrs : 0,
      mins : 0,
      sec : 0,
      start : false
    }
  }

updateCounter = () =>{
  if(this.state.start === true){
    this.setState({sec: this.state.sec+1})

    if(this.state.sec === 60){
      this.setState({sec:0, mins:this.state.mins+1})
      
      if(this.state.mins === 60){
        this.setState({mins:0, hrs:this.state.hrs+1})
      }
    }
  }
  else{
    console.log("cannot update");
  }
}

startTimer(){
  if(!this.state.start){
    this.setState({start:true});
    this.timerId = setInterval(()=>this.updateCounter(),1000)
  }
}

stopTimer(){
  this.setState({start:false});
  clearInterval(this.timerId);
}

resetTimer(){
  this.setState({start:false});
  this.setState({
    mins:0,
    hrs:0,
    sec:0,
    start:false,
  });
}

render(){
  return(
    <div>
    <h2> StopWatch</h2>
    <h3 >
      {this.state.hrs} : {this.state.mins} : {this.state.sec}
    </h3>
    <div class= "blockdisplay">
    <Button onClick={()=>this.startTimer()} variant="success"> START</Button>
    <Button onClick={()=>this.stopTimer()} variant="danger"> STOP</Button>
    <Button onClick={()=>this.resetTimer()} variant="warning"> RESET</Button>
    </div>
    </div>
  );
}
}

export default App