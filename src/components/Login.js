import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/Login.scss";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUserAction } from "../actions/authAction";
import swal from "@sweetalert/with-react";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let data = {
      email,
      password
    };

    this.props.dispatch(loginUserAction(data));
    console.log(this.props.response.login.error);
    
    if(this.props.response.login.error) {
      swal("sorry!", "Invalid Credentials", "error")
    }
  };

  render() {
    
    const {
      response: {
        login: { token }
      }
    } = this.props;
    
    // console.log(action);

    if (token) {
      localStorage.setItem("token", token);
    }

    console.log(this.props);

    return (
      <div className="di">
        {localStorage.token ? <Redirect to="/user" /> : null}
        <Navbar />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="log">
            <input
              className="input"
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Enter your E-mail"
            />
            <br />
            <input
              className="input"
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
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

const mapStateToProps = response => ({
  response
});

export default connect(mapStateToProps)(Login);
