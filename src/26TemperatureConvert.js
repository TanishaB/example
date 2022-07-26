import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  

function App(){

    const[data, setData] = useState(0);
    const[select ,setSelect] = useState("");

    function convert(){

        if(select == "ctof"){
            const ctof = ((data*(9/5))+32);
            alert(`Celcius ${data} to Fahrenheit ${ctof}`);
        }
        else{
            const ftoc = ((data-32)*(5/9));
            alert(`Fahrenheit  ${data} to Celcius ${ftoc}`)
        }
      
        }
    
    return(
            <div>
                <form>
                <label for="data">Enter Data :</label><br/> 
                <input type="number" id="data" name ="data" value={data} onChange={(e) => setData(e.target.value)}></input><br/>
                
                <label for="select">Select:</label>
                <select id="select" value = {select} name="select" onChange={(e) => setSelect(e.target.value)}>
                    <option value="">None</option>
                    <option value="ctof">Celcius to Fahrenheit </option>
                    <option value="ftoc">Fahrenheit to Celcius</option>
                </select>
                <br/>
                <button type="button" onClick={convert}> Calculate </button>
            </form>
              
            </div>
        );
}
export default App