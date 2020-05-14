import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">eBook</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/"><i className="fas fa-home fa-2x"></i>
          </Link>
        </li>
        <li className="nav-item dropdown navmain">
          <Link className="nav-link dropdown-toggle font-weight-bold text-white" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link 
            className="dropdown-item" to="/user"
            data-toggle="tooltip"
            title={"Profile"}
            >
            My Profile</Link>
            <button 
            className="dropdown-item text-danger" 
            data-toggle="tooltip"
            title={"Logout"} 
            type="button" 
            onClick={props.log}>
            Logout
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  );
}
