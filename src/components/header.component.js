import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Todo List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
