import { useState } from "react";
import {Button, ButtonGroup} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';  

export default function Calculator(){

    const[equation, setEquation] = useState("");

    function finalResult(){
        const result = eval(equation);
        alert("clicked");
        console.log(equation);
        setEquation(result);

    }

    function clearScreen(){
        console.log("Screen cleared");
        setEquation("");
    }

    return(
        <div className="blockdisplay">

            <h2> {equation}</h2>
            
            <br/>
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="primary" onClickCapture={(e) => setEquation(equation + "7")} > 7 </Button> &nbsp;
                <Button variant="primary" onClickCapture={(e) => setEquation(equation + "8")} > 8 </Button> &nbsp;
                <Button variant="primary" onClickCapture={(e) => setEquation(equation + "9") }> 9 </Button> &nbsp;
                <Button variant="warning" onClickCapture={(e) => setEquation(equation + "-") }> - </Button> &nbsp;
            </ButtonGroup>

            <br/>

            <ButtonGroup size="lg" className="mb-2">
                <Button variant="primary" onClickCapture={(e) => setEquation(equation + "7")}  > 4 </Button> &nbsp;
                <Button variant="primary" onClickCapture={(e) => setEquation(equation + "5")}  > 5</Button>  &nbsp;
                <Button variant="primary"  onClickCapture={(e) => setEquation(equation + "6")}  > 6 </Button> &nbsp;
                <Button variant="warning"  onClickCapture={(e) => setEquation(equation + "/")}  > / </Button> &nbsp;
            </ButtonGroup>

            <br/>
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="primary"  onClickCapture={(e) => setEquation(equation + "1")}  > 1 </Button> &nbsp;
                <Button variant="primary"  onClickCapture={(e) => setEquation(equation + "2")}  > 2 </Button>  &nbsp;
                <Button variant="primary"  onClickCapture={(e) => setEquation(equation + "3")}  > 3 </Button> &nbsp;
                <Button variant="warning"  onClickCapture={(e) => setEquation(equation + "*")}  > * </Button>&nbsp;
            </ButtonGroup>

            <br/>
            <ButtonGroup size="lg" className="mb-2">
                <Button onClickCapture={() =>clearScreen()} variant="danger" size="lg" > CLEAR  </Button>  &nbsp;
                <Button variant="primary"  onClickCapture={(e) => setEquation(equation + "0")}  > 0 </Button>&nbsp;
                <Button variant="success"  onClickCapture={() => finalResult()} >  = </Button>            &nbsp;
                <Button variant="warning" onClickCapture={(e) => setEquation(equation + "+")} > + </Button> 
            </ButtonGroup>
            



        </div>
    );
}

/*


import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calculator from './24Calculator';

 
class App extends React.Component{
  render(){
    return(
      <div>
        <Calculator/>
      </div>
    );
  }
}
 
export default App;



*/