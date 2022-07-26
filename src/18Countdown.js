import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends React.Component{

  constructor(){
    super();
    this.state={
      mins:0,
      sec:0,
      start:false
    }
  }

  updateCounter=()=>{
    if(this.state.start === true){
      if(this.state.mins===0 && this.state.sec===0){
        this.setState({start:false});
        alert("Time up!!")
      }

      else{
        
        if(this.state.sec==0){
          this.setState({sec:59, mins:this.state.mins-1})
          if(this.state.mins==0){
            this.setState({start:false});
            alert("Time up!")
          }
        }
        else{
          this.setState({sec:this.state.sec-1})
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
      this.timerId=setInterval(()=>this.updateCounter(),1000)
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
      sec:0,
      start:false
    });
  }

  minPlus(){
    this.setState({mins:this.state.mins+1});
  }

  minMinus(){
    if(this.state.mins>0){
      this.setState({mins:this.state.mins-1});
    }
  }

  secPlus(){
    if(this.state.sec<59){
      this.setState({sec:this.state.sec+1});
    }
  }

  secMinus(){
    if(this.state.sec > 0){
      this.setState({sec:this.state.sec-1});
    }
  }


render(){
  return(
    <div>
      <h2>Countdown</h2>
      <h3>{this.state.mins} : {this.state.sec}</h3>
      <div className='blockdisplay'>
      <Button onClick={()=>this.minPlus()} variant="success">Add Minute</Button>
      <Button onClick={()=>this.minMinus()} variant="danger">Minus Minute</Button>
      <Button onClick={()=>this.secPlus()} variant="success">Add Second</Button>
      <Button onClick={()=>this.secMinus()} variant="danger">Minus Second</Button>

      <br/><br/>
  
      <Button onClick={()=>this.startTimer()} variant="success">START</Button>
      <Button onClick={()=>this.stopTimer()} variant="danger">STOP</Button>
      <Button onClick={()=>this.resetTimer()} variant="warning">RESET</Button>
      </div>
    </div>
  );
}

}

export default App