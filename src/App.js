import React, { Component } from "react";
import Todos from "./components/Todos";
import Headers from "./components/layout/header";
import Addtodos from "./components/Addtodos";
import uuid from "react-uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Learn coding",
        completed: false,
      },
      {
        id: uuid(),
        title: "coffee with MyLove",
        completed: true,
      },
      {
        id: uuid(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };
  //Toggle
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  //Add Todo
  addTodos = (title) => {
    //console.log(title);
    const newTodo = { id: uuid(), title: title, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="container">
        <Headers />
        <Addtodos addTodos={this.addTodos} />
        <Todos
          todos={this.state.todos}
          markCompleted={this.markCompleted}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
