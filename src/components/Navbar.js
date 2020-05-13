import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        eBook
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <i className="fas fa-home fa-2x"></i>
            </Link>
          </li>
        </ul>
        <Link to="/register" className="btn btn-outline-light btn-dark ml-2">
          Register
        </Link>
        <Link to="/login" className="btn btn-outline-light btn-dark ml-2">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
