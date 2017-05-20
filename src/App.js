import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import Todo from './Todo';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.newTodo = this.newTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  newTodo = function(i){
    var newstate = this.state.data.slice();
    newstate.push(i);
    this.setState({ data: newstate })
  }

  deleteTodo = function(index) {
    const allItems = this.state.data;
    allItems.splice(allItems.indexOf(index),1);
    this.setState({data: allItems});
  }

  render(){
    const todo = this.state.data.map( (item,i) => (<Todo key={i} todo={item} delete={this.deleteTodo}/>), this );
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo List</h2>
        </div>
        <div className="container">
          <TodoForm newTodo={this.newTodo}/>

          <table className="table table-striped">
            <tbody>
            {todo}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}

export default App;