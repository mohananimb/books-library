import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/Login.scss";
import { Redirect } from "react-router-dom";
import swal from '@sweetalert/with-react'

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

    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => {
      if(res.status === 200) {
        res.json().then(data => {
          localStorage.setItem("token", JSON.stringify(data.token));
                  localStorage.setItem("email", this.state.email)
                  this.setState({
                    isLoggedIn: true
                  })
        })
      }else {
            this.setState({
              email: "",
              password: ""
            });
            swal("Opps","Invalid Username or passowrd", "error");
          }
    })

    // fetch("localhost:5000/users/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(this.state)
    // }).then(res => {
    //   if (res.status === 200) {
    //     res.json().then(data => {
    //         localStorage.setItem("token", JSON.stringify(data.token));
    //         localStorage.setItem("email", this.state.email)
    //         this.setState({
    //           isLoggedIn: true
    //         })
    //     });
    //   } else {
    //     this.setState({
    //       email: "",
    //       password: ""
    //     });
    //     swal("Sorry!", "You are not authorised to this site!", "error");
    //   }
    // });
  };

  render() {

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
