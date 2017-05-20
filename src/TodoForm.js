import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e){
    this.setState({ value: e.target.value})
  }

  addTodo(e){
    if(this.state.value.length > 0) {
      this.props.newTodo(this.state.value);
      this.setState({value: ""});
    }
    e.preventDefault();
  }

  render(){
    return (

      <form className="todoForm" onSubmit={this.addTodo}>
        <div className="row">
          <div className="col-sm-8">
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control input-lg" placeholder="Write something"/>
          </div>
          <div className="col-sm-4">
            <button type="submit" className="btn btn-primary btn-block btn-lg">Add Todo</button>
          </div>
        </div>
      </form>

    )
  }
}

export default TodoForm;