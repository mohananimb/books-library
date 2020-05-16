import React, { useState, useEffect } from "react";
import "./styles/User.scss";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";


export default function User() {
  const [isRedirect, setRedirect] = useState(false);
  const [user, setUser] = useState()

  useEffect(() => {
    fetch("https://reqres.in/api/users").then(res => res.json())
    .then(data => {
      setUser(data.data.filter(user => user.email === localStorage.email))
    })
    
  },[])


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email")
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
        {user ?<img src={user[0].avatar}/> : null }
          {user ? <p className="text-warning">{user[0].first_name} {user[0].last_name}</p> : null}
          <p>Welcome to eBook!</p>
          <Link to="/favorite-books" className="btn btn-warning ">
            Explore Your Favorite Books
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
