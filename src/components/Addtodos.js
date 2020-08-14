import React, { Component } from "react";

class Addtodos extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodos(this.state.title);
    this.setState({ title: "" });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          placeholder="Add todo..."
          type="text"
          name="title"
          style={{ flex: "10", padding: "10px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn "
          style={{ flex: "1", background: "#FFD801", color: "#282302" }}
        />
      </form>
    );
  }
}

export default Addtodos;
