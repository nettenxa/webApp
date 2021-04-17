import React from 'react';
import Message from './Message'
// import './App.css';

var x='Click to Show';
console.log(x)
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  } 

  handleClick = () => {
    if (this.state.count === 0){
      this.setState({count: 1});
      x='Click to Hide';
      console.log(x)
    }
      
    else {
      this.setState({count: 0});
      x='Click to Show';
      console.log(x)
    } 
  }

  render() {
    return (
      <div>
          <h2 class="center">Add new movies</h2>
          {/* <label>title</label>
          <input type="text" />
          <button>summit</button> */}
          <p></p>
          <button class="center" onClick={this.handleClick} >
          {x}
          </button>
          <p class="center">{this.state.count?<Message/>:null}</p>
      </div>
      
      // <div >
      //   <h1 class="center">Movie List</h1>
      //   <div class="center">
          // <button class="center" onClick={this.handleClick} >
          // {x}
          // </button>
      //   </div>
        // <p class="center">{this.state.count?<Message/>:null}</p>
      // </div>
    );
  }
}