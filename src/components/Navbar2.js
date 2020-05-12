import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2(props) {
  return (
    <div>
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
                Home
              </Link>
            </li>
          </ul>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle btn btn-dark btn-outline-light mx-4 mb-3"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to=""
            >
              Account
            </Link>
            <div
              className="dropdown-menu bg-light"
              aria-labelledby="navbarDropdown"
            >
              <Link
                data-toggle="tooltip"
                title={"Profile"}
                className="dropdown-item text-succes"
                to="/user"
              >
                My Profile
              </Link>
              <button
                data-toggle="tooltip"
                title={"Logout"}
                type="button"
                onClick={props.log}
                className="dropdown-item text-danger"
              >
                Logout
              </button>
            </div>
          </li>
        </div>
      </nav>
    </div>
  );
}
