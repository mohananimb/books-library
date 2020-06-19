import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/Login.scss";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUserAction } from "../actions/authAction";
import swal from "@sweetalert/with-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let data = {
      email,
      password
    };

    this.props.dispatch(loginUserAction(data));
  };

  componentDidUpdate(prevProps, prevState) {
    const {
      response: {
        login: { error }
      }
    } = this.props;
    if (error) {
      swal("Oops", "Invalid E-mail or Password", "warning");
      this.emailRef.current.value = "";
      this.passwordRef.current.value = "";
    }
  }

  render() {
    const {
      response: {
        login: { token }
      }
    } = this.props;

    return (
      <div className="di">
        {token ? localStorage.setItem("token", token) : null}
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
              ref={this.emailRef}
            />
            <br />
            <input
              className="input"
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
              ref={this.passwordRef}
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
