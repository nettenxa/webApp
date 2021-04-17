import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
// import './App.css';


export default class App extends React.Component {

  state = {
    todos: [
      {id: 1, content: 'Do homework'},
      {id: 2, content: 'Go shoping'},
      {id: 3, content: 'Diner homework'}
    ]
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

  render() {
    return (
      <div>
        <h1>Todo's</h1>
        <Todos data = {this.state.todos} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}