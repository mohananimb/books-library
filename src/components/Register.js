import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import "./css/Register.css";
import CryptoJS from "crypto-js";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    cpassword: "",
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();
    // if (localStorage.getItem("token")) {
    //   alert("Your are already registered! Please Sign In");
    //   this.setState({ redirect: true });
    // } else {

    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => {
      let status = res.status;
      if (status === 400) {
        alert("Invalid username or password or unauthorised User");
      } else if (status === 200) {
        res.json().then(data => {
          if (localStorage.hasOwnProperty(`token${data.id}`)) {
            alert("You are already registered! Please Sign In");
            this.setState({ redirect: true });
          } else {
            let info = {
              id: data.id,
              token: data.token,
              email: this.state.email,
              password: CryptoJS.MD5(this.state.password).toString()
            };
            localStorage.setItem(`token${data.id}`, JSON.stringify(info));
            alert("You're Signed Up Successfully! Please Login");
            this.setState({ redirect: true, email: "", password: "" });
          }
        });
      }
    });
    // }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    //   console.log(CryptoJS.MD5("Test").toString());

    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Navbar />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="reg">
            <input
              className="input"
              type="text"
              name="email"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Enter your E-mail"
              value={this.state.email}
            />
            <span
              id="email-error"
              className="text-danger font-weight-bold"
            ></span>
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
            <input
              className="input"
              type="password"
              name="cpassword"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Confirm your Password"
              value={this.state.cpassword}
            />
            <br />
            <button
              className="btn btn-dark btn-outline-light btn-lg my-2"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
