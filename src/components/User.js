
import React, { Component } from 'react'
import "./styles/User.scss";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
import { connect } from "react-redux";
import { user } from "../redux/actions/booksAction"
class User extends Component {
  state = {
    isRedirect: false
  }

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email")
    this.setState({
      isRedirect: true
    })
  };


  render() {
    console.log(this.props);

    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (

      <React.Fragment>
        <div className="main">
          <Navbar2 log={this.logout} />
          <div className="explore">
            <h1>Hello!</h1>
            {user ? <img src={user.avatar} alt={user.first_name} /> : null}
            {user ? <p className="text-warning">{user.first_name} {user.last_name}</p> : null}
            <p>Welcome to eBook!</p>
            <Link to="/favorite-books" className="btn btn-warning ">
              Explore Your Favorite Books
          </Link>
          </div>
        </div>

      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => ({
  state
})

// const mapDispatchToProps = dispatch => ({
//   loadData: () => dispatch(loadData())
// })

export default connect(mapStateToProps)(User);







