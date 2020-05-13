import React, { useState } from "react";
import "./styles/User.scss";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";


export default function User() {
  let user = undefined;
  if (localStorage.token) {
    for(let key in localStorage) {
      let temp = JSON.parse(localStorage.getItem(key))
      if (temp.token === JSON.parse(localStorage.token)) {
            user = temp;
          }
          break;
    }
  }
  

  const [isRedirect, setRedirect] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setRedirect(true);
  };
  
  if (isRedirect) {
    return <Redirect to="/" />;
  }
  return (
    <React.Fragment>
      <div className="main">
        <Navbar2 log={logout} />
        <div className="explore">
          <h1>Hello!</h1>
          <p className="text-warning">{user.email}</p>
          <p>Welcome to eBook!</p>
          <Link to="/favorite-books" className="btn btn-warning ">
            Explore Your Favorite Books
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
