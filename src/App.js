import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/todolist.component.js";
import CreateTodo from "./components/createtodo.component.js";
import EditTodo from "./components/edittodo.component.js";
import Header from "./components/header.component.js";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Route path="/" exact component={TodoList} />
        <Route path="/create" exact component={CreateTodo} />
        <Route path="/edit/:id" exact component={EditTodo} />
      </div>
    </Router>
  );
}

export default App;
