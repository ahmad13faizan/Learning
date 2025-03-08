import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import icon from "./icon.png";

function Login() {
  const navigate = useNavigate();
  const [fields, setfields] = useState({
    username: "",
    password: "",
  });
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
  
    const userData = localStorage.getItem(fields.username);
  
    if (userData) {
      const user = JSON.parse(userData);
      
      if (user.password === fields.password) {
        alert("Login successful");
        localStorage.setItem("token", "authorised");
        navigate("/home");
        return;
      }
    }
  
    alert("User not found || Incorrect Username or Password");
    setfields({ username: "", password: "" });
  };
  

  const onchangehandler = (e) => {
    setfields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="main-div" className="login-card">
      <h2>Login</h2>
      <img src={icon} />

      <form onSubmit={onSubmitHandler}>
        
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={onchangehandler}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={onchangehandler}
        />

        <button className="login" type="submit">
          Login
        </button>
      </form>

      <div id="last-div">
        <button
          className="reset"
          onClick={() =>
            setfields({
              username: "",
              password: "",
            })
          }
        >
          Reset
        </button>

        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
