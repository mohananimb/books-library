import React, { Component } from "react";
import "./styles/User.scss";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
import { connect } from "react-redux";
class User extends Component {
 
  logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
    
  };

  render() {   
    return (
      <React.Fragment>
        <div className="main">
          <Navbar2 log={this.logout} />
          <div className="explore">
            <h1>Hello!</h1>
            <p>Welcome to eBook!</p>
            <Link to="/favorite-books" className="btn btn-warning ">
              Explore Your Favorite Books
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  state
});

// const mapDispatchToProps = dispatch => ({
//   loadData: () => dispatch(loadData())
// })

export default connect(mapStateToProps)(User);
