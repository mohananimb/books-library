import React, { Component } from "react";
import Navbar from "./Navbar";
import "./css/Login.css";
import { Redirect } from "react-router-dom";
import CryptoJS from "crypto-js";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          for (let i = 1; i <= localStorage.length; i++) {
            let temp = localStorage.getItem("token" + i);
            if (temp) {
              // console.log(JSON.parse(temp).password);
              let email = JSON.parse(temp).email;
              let password = JSON.parse(temp).password;
              let currentPass = CryptoJS.MD5(this.state.password).toString();
              if (email === this.state.email) {
                if (password === currentPass) {
                  localStorage.setItem("token", JSON.stringify(data.token));
                  this.setState({
                    isLoggedIn: true
                  });
                  break;
                } else {
                  this.setState({
                    email: "",
                    password: ""
                  });
                  alert("Invalid Password!");
                  break;
                }
              } else {
                this.setState({
                  email: "",
                  password: ""
                });
                alert("Invalid Email!");
                break;
              }
            }
          }
        });
      } else {
        this.setState({
          email: "",
          password: ""
        });
        alert("Invalid Username or Password");
      }
    });
  };

  render() {
    // let token = JSON.parse(localStorage.getItem("token"));

    return (
      <div className="di">
        {this.state.isLoggedIn ? <Redirect to="/user" /> : null}
        <Navbar />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="log">
            <input
              className="input"
              type="text"
              name="email"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Enter your E-mail"
              value={this.state.email}
            />
            <br />
            <input
              className="input"
              type="password"
              name="password"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Enter your Password"
              value={this.state.password}
            />

            <br />
            <button
              className="btn btn-dark btn-outline-light btn-lg my-2"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
