import React, { Component } from "react";
import axios from "axios";
import { createtodo } from "./TodoFunctions";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onchangeTodoDescription = this.onchangeTodoDescription.bind(this);
    this.onchangeTodoPriority = this.onchangeTodoPriority.bind(this);
    this.onchangeTodoResponsible = this.onchangeTodoResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }
  onchangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }
  onchangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }
  onchangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };

    createtodo(user).then((res, err) => {
      if (res) {
        this.props.history.push("/");
      }
      // } else {
      //   this.setState({
      //     loading: false,
      //     message: "Login Error : Phone and Password doesn't matched"
      //   });
      // }
    });
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h2>Create Todo</h2>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onchangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onchangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onchangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onchangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onchangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
