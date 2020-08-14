import React, { Component } from "react";
import PropTypes from "prop-types";

class TodosItems extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: 10,
      borderBottom: "1px  #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleted.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnstyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}
//propTypes
TodosItems.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnstyle = {
  background: "#ed3511",
  color: "#fff",
  border: "none",
  padding: "2px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default TodosItems;
