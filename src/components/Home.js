import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/Books.scss";
import Book from "./Books";
import { connect } from "react-redux";
import Navbar2 from "./Navbar2";
import { Redirect } from "react-router-dom";
import { loadData } from "../actions"

class Home extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    // this.props.fetchBooks();
    this.props.loadData()
    // console.log(this.props.books);

  }

  render() {
    const lg = () => {
      localStorage.removeItem("token");
      window.location = "/login"
    };

    return (
      <React.Fragment>

        {localStorage.token ? <Navbar2 log={lg} /> : <Navbar />}
       
        <div className="fetchBook">
          {this.props.books.map(book => (
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

const mapStateToProps = ({ books, error, isLoading }) => ({
  books, error, isLoading
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
