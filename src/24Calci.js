import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
import {Button, ButtonGroup} from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';  


class App extends React.Component{

    constructor(){
        super();
        this.state={
            equation : "",
            answer : 0
        }
    }

    displayEqn=()=>{
        alert("HI");
        console.log("value");
    }

    clearScreen=()=>{
        alert("HI clear");
        console.log("Screen cleared");
    }
 
    render(){
    return(
        <div>

<h1> Equation :
            {this.state.equation}
            </h1>
            
            
                <Button onclick={()=>clearScreen} variant="danger" > CLEAR  </Button>        
                <Button variant="warning" onclick={()=>displayEqn} value='+'> + </Button>   
       

            <br/>
        
                <Button variant="primary" onclick={()=>displayEqn()} value='7'> 7 </Button>
                <Button variant="primary" onclick={()=>displayEqn()} value='8'> 8 </Button> 
                <Button variant="primary" onclick={()=>displayEqn()} value='9'> 9 </Button>
                <Button variant="warning" onclick={()=>displayEqn()} value='-'> - </Button>
           

            <br/>

    
                <Button variant="primary" onclick={()=>displayEqn()} value='4'> 4 </Button>
                <Button variant="primary" onclick={()=>displayEqn()} value='5'> 5 </Button> 
                <Button variant="primary" onclick={()=>displayEqn()} value='6'> 6 </Button> 
                <Button variant="warning" onclick={()=>displayEqn()} value='/'> / </Button>

            <br/>

                <Button variant="primary" onclick={()=>displayEqn()} value='1'> 1 </Button>
                <Button variant="primary" onclick={()=>displayEqn()} value='2'> 2 </Button> 
                <Button variant="primary" onclick={()=>displayEqn()} value='3'> 3 </Button> 
                <Button variant="warning" onclick={()=>displayEqn()} value='*'> * </Button>

            <br/>

                <Button variant="primary" onclick={()=>displayEqn("0")} value='0'> 0 </Button>
                <Button variant="success">  = </Button>            

            


        </div>
    );
  }

}
export default App