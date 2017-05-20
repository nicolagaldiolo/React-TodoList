import React, { Component } from 'react';

class Todo extends Component {

  constructor(props){
    super(props);
    this.markComplete = this.markComplete.bind(this);
  }

  markComplete(){
    this.props.delete(this.props.todo);
  }
  render(){
    return (
      <tr>
        <td>{this.props.todo}</td>
        <td>
          <button className="pull-right btn btn-default" onClick={this.markComplete}>Completata</button>
        </td>
      </tr>
    )
  }
}

export default Todo;