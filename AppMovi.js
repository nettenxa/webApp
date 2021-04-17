import logo from './logo.svg';
import React from 'react';
import Todos from './TodosMovi';
import AddTodo from './AddTodoMovi';
import Message from './Message'
import movies from './movies.js';
import './App.css';

var x='Click to Show';
console.log(x)

export default class App extends React.Component {

  state = {
    todos: movies
  }

  addTodo = (content) => {
    let newItem = {id: Math.random(), content: content};
    let todos = [...this.state.todos, newItem ];
      this.setState({todos: todos});
  }
  deleteTodo = (id) => {
    console.log("delete", id);
    let todos = this.state.todos.filter(item => 
      item.id !== id);
    this.setState({todos: todos});
  }
  removeTask(index, event) {
    const tasks = this.state.tasks
    tasks.splice(index, 1)    
    this.setState({tasks})
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
      <div class="body" className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <button class="center" onClick={this.handleClick} >
          {x}
          </button>
          <p> Press the volume to display the results.</p>
          <p class="center" class="p1" id= "pcolor">{this.state.count? 
          <Todos data = {this.state.todos} deleteTodo = {this.deleteTodo}/>:null}</p>
          <AddTodo addTodo={this.addTodo}/>

          <header className="App-header">
          
          </header>

      </div>
      
    );
  }
}