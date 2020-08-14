import React, { Component } from "react";
import TodosItems from "./TodosItems";

class Todos extends Component {
  state = {};
  render() {
    //console.log(this.props.todos);
    return (
      <React.Fragment>
        {this.props.todos.map((todo) => (
          <TodosItems
            key={todo.id}
            todo={todo}
            markCompleted={this.props.markCompleted}
            delTodo={this.props.delTodo}
            // addTodos={this.props.addTodos}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Todos;
