import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/Login.scss";
import { Redirect } from "react-router-dom";
import CryptoJS from "crypto-js";
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


   findUSer (mail) {
    let key, result = [];
    for (key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {

      let j = JSON.parse(localStorage[key])
      if(j.email) {
          if(j.email === mail) { 
          let value = JSON.parse(localStorage.getItem(key));
          result.push({
              key: key,
              val: value
          })
        }
      }
  
      }
    }
    return result;
  }
  

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

          let r = this.findUSer(this.state.email);
          
          if(r.length > 0) {

            if((r[0].val.password ===  CryptoJS.MD5(this.state.password).toString())) {
              localStorage.setItem("token", JSON.stringify(data.token));
              localStorage.setItem("email", r[0].val.email)
                this.setState({
                  isLoggedIn: true
                })
            }else {
              this.setState({
                email: "",
                password: ""
              })
              swal("Sorry!", "Invalid Username or Password!", "error");
            }

          }else {
            this.setState({
              email: "",
              password: ""
            });
        swal("Sorry!", "You have to register before login!", "error");
          }
        });
      } else {
        this.setState({
          email: "",
          password: ""
        });
        swal("Sorry!", "You are not authorised to this site!", "error");
      }
    });
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
