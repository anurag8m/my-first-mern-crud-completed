import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alltodolist: []
    };
  }

  componentDidMount() {
    // get todo list

    var apiUrl = `http://localhost:4000/todos/todolist`;
    fetch(apiUrl)
      .then(getresponse => {
        return getresponse.json();
      })
      .then(data => {
        console.log(data);
        let allempFromApi = data.todolist.map(team => {
          return {
            todomainid: team._id,
            tododesc: team.todo_description,
            todoresp: team.todo_responsible,
            todoprio: team.todo_priority,
            todocomp: team.todo_completed
          };
        });
        this.setState({ alltodolist: allempFromApi, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h2>Todo List</h2>
        <br />

        <table className="table table-hover table-bordered" id="sampleTable">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alltodolist.map(team => (
              <tr key={team.empmainid}>
                <td>{team.tododesc}</td>
                <td>{team.todoresp}</td>
                <td>{team.todoprio}</td>
                <td>{team.todocomp.toString()}</td>

                <td>
                  <Link
                    to={"/edit/" + team.todomainid}
                    className="dropdown-item"
                  >
                    <i className="fa fa-pencil fa-lg" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
