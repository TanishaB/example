import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            count : 0,
            images: [
                "nature1.jpg",
                "nature2.jpg",
                "nature3.jpg",
                "nature4.jpg"
            ]
        };
    }
      
    changeImage = () =>{
        this.setState({count : this.state.count + 1});
        
    }
    render() {
        return (
          <div>
            <img class="imgcss" src={this.state.images[this.state.count % this.state.images.length]} ></img>
            <br/><br/>
            <h1>Nature</h1>
          </div>
        );
    }

    
    componentWillMount() {
        setInterval(this.changeImage, 3000);
      }

     
   
}
export default App;