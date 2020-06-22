import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/Books.scss";
import Book from "./Books";
import { connect } from "react-redux";
import Navbar2 from "./Navbar2";
// import { Redirect } from "react-router-dom";
import { loadData } from "../actions";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";

const loaderCss = css`
  margin-top: 25%;
`;

class Home extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {

    const lg = () => {
      localStorage.removeItem("token");
      window.location = "/login";
    };

    return (
      <React.Fragment>
        {this.props.books.loading ? (
          <BeatLoader
            css={loaderCss}
            size={60}
            height={500}
            color="#e7dfd5"
            loading
          />
        ) : (
          <div>
            {localStorage.token ? <Navbar2 log={lg} /> : <Navbar />}
            <div className="fetchBook">
              {this.props.books.books.map(book => (
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
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ books, error, isLoading }) => ({
  books,
  error,
  isLoading
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
