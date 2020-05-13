import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/Register.scss";
import CryptoJS from "crypto-js";
import swal from '@sweetalert/with-react'

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    cpassword: "",
    emailErr: "",
    passwordErr: "",
    cpasswordErr: "",
    redirect: false
  };

  userValidation = () => {
    const { email, password, cpassword } = this.state;

    if (email.includes("@") && email.includes(".")) {
      if (password.length > 8) {
        if (password === cpassword) {
          return true;
        } else {
          this.setState({
            cpasswordErr: "Password doesn't match"
          });
        }
      } else {
        this.setState({
          passwordErr: "Password must be eight characters long"
        });
        return false;
      }
    } else {
      this.setState({
        emailErr: "Invalid Email"
      });
      return false;
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.userValidation()) {
      fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        let status = res.status;
        if (status === 400) {
          swal("Sorry!", "You're not authorised user, you can't register!", "danger");
          this.setState({ email: "", password: "", cpassword: "" });
        } else if (status === 200) {
          res.json().then(data => {
            if (localStorage.hasOwnProperty(`token${data.id}`)) {
              swal("ohh!", "You're alredy registered, Please Login!", "warning");
              this.setState({ redirect: true });
            } else {
              let info = {
                id: data.id,
                token: data.token,
                email: this.state.email,
                password: CryptoJS.MD5(this.state.password).toString()
              };
              localStorage.setItem(`token${data.id}`, JSON.stringify(info));
              swal("Great!", "You're Signed Up Successfully! Please Login", "succes");
              this.setState({
                redirect: true,
                email: "",
                password: "",
                cpassword: ""
              });
            }
          });
        }
      });
    } else {
      setTimeout(() => {
        this.setState({
          emailErr: "",
          passwordErr: "",
          cpasswordErr: ""
        });
      }, 2000);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {

    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Navbar />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="reg">
            <input
              className={`input ${this.state.emailErr && "emailErr"}`}
              type="text"
              name="email"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Enter your E-mail"
              value={this.state.email}
            />
            <span id="email-error" className="text-danger font-weight-bold">
              {this.state.emailErr}
            </span>
            <br />
            <input
              className={`input ${this.state.passwordErr && "passErr"}`}
              type="password"
              name="password"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Enter your Password"
              value={this.state.password}
            />
            <span id="password-error" className="text-danger font-weight-bold">
              {this.state.passwordErr}
            </span>
            <br />
            <input
              className={`input ${this.state.cpasswordErr && "cpassErr"}`}
              type="password"
              name="cpassword"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Confirm your Password"
              value={this.state.cpassword}
            />
            <span id="password-error" className="text-danger font-weight-bold">
              {this.state.cpasswordErr}
            </span>
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
