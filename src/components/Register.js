import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/Register.scss";
import swal from "@sweetalert/with-react";
import { connect } from "react-redux";
import { registerUserAction } from "../actions/authAction";

class Register extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.cpasswordRef = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let cpassword = e.target.cpassword.value;

    if (email.includes("@") && email.includes(".")) {
      if (password.length > 8) {
        if (password === cpassword) {
          const data = {
            email,
            password
          };

          this.props.dispatch(registerUserAction(data));
        } else {
          this.emailRef.current.value = "";
          this.passwordRef.current.value = "";
          this.cpasswordRef.current.value = "";
          swal("Sorry!", "Password Not Match", "error");
        }
      } else {
        this.emailRef.current.value = "";
        this.passwordRef.current.value = "";
        this.cpasswordRef.current.value = "";
        swal("Sorry!", "Password Must be 8 characters long", "error");
      }
    } else {
      this.emailRef.current.value = "";
      this.passwordRef.current.value = "";
      this.cpasswordRef.current.value = "";
      swal("Sorry!", "Invalid E-mail", "error");
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const {
      response: {
        register: { user, error }
      }
    } = this.props;

    if (error) {
      swal("Oops", "Something went wrong", "warning");
      this.emailRef.current.value = "";
      this.passwordRef.current.value = "";
      this.cpasswordRef.current.value = "";
    }

    if (user) {
      swal("Great", "You're Signed Up Successfully", "success").then(() => {
        window.location = "/login";
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <form className="form" id="form" onSubmit={this.handleSubmit}>
          <div className="reg">
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
            <input
              className="input"
              type="password"
              name="cpassword"
              autoComplete="off"
              placeholder="Confirm your Password"
              ref={this.cpasswordRef}
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

const mapStateToProps = response => ({
  response
});

export default connect(mapStateToProps)(Register);
