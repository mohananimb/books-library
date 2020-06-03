import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/Books.scss";
import Book from "./Books";
import { connect } from "react-redux";
import { fetchBooks } from "../redux/actions/booksAction";
import Navbar2 from "./Navbar2";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const lg = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("email")

      this.setState({
        redirect: true
      });
    };


    return (
      <React.Fragment>
        {localStorage.token ? <Navbar2 log={lg} /> : <Navbar />}
        {this.state.redirect ? <Redirect to="/login" /> : null}
        <div className="fetchBook">
          {this.props.booksReducer.map(book => (
            <Book
              name={book.title}
              author={book.author}
              released={book.year}
              img={book.image}
              key={book._id}
              id={book._id}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  booksReducer: state.booksReducer.books
});

export default connect(mapStateToProps, { fetchBooks })(Home);
