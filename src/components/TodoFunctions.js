import axios from "axios";

export const register = newUser => {
  return axios
    .post("http://54.89.216.159:3000/signup", {
      name: newUser.name,
      phone: newUser.phone,
      pass: newUser.pass
    })
    .then(res => {
      console.log("Registered!");
    });
};

export const login = user => {
  return axios
    .post("http://54.89.216.159:3000/newlogin", {
      phone: user.phone,
      pass: user.password
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err.response.data.msg);
    });
};

export const myprofile = user => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("usertoken")
  };
  return axios
    .get("http://54.89.216.159:3000/profile", { headers: headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

//edit and update todo
export const edittodo = user => {
  return axios
    .post("http://localhost:4000/todos/updatetodo", {
      edit_todo_description: user.todo_description,
      edit_todo_responsible: user.todo_responsible,
      edit_todo_priority: user.todo_priority,
      edit_todo_completed: "true",
      id: user.requestedId
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

// create todo API
export const createtodo = user => {
  return axios
    .post("http://localhost:4000/todos/createtodo", {
      todo_description: user.todo_description,
      todo_responsible: user.todo_responsible,
      todo_priority: user.todo_priority,
      todo_completed: user.todo_completed
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
