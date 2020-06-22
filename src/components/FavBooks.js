import React, { Component } from "react";
import Book from "./Books";
import "./styles/FavBooks.scss";
import { Redirect } from "react-router-dom";
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import { favData } from "../actions/booksActions";

const loaderCss = css`
  margin-top: 25%;
`;

class FavBooks extends Component {
  componentDidMount() {
    this.props.favData();
  }

  render() {
    const lg = () => {
      localStorage.removeItem("token");
      window.location = "/";
    };
    return (
      <>
        {this.props.state.favBooks.loading ? (
          <div>
            <BeatLoader
              css={loaderCss}
              size={60}
              height={500}
              color="#e7dfd5"
              loading
            />
          </div>
        ) : (
          <div>
            {localStorage.token ? (
              <div>
                {this.props.state.favBooks.favBooks.length === 0 ? (
                  <div>
                    <Navbar2 log={lg} />
                    <div className="err">
                      <h1>
                        Ohh! You have not added any book to your favorite list
                      </h1>
                      <Link
                        to="/"
                        className="btn btn-warning btn-block my-3 lnk"
                      >
                        <p className="para">Let's Add</p>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="fb">
                      <Navbar2 log={lg} />
                      <h1 className="heading">MY FAVORITES</h1>
                      <hr />
                      <div className="favBooks">
                        {this.props.state.favBooks.favBooks.map(book => {
                          return (
                            <Book
                              key={book._id}
                              name={book.title}
                              author={book.author}
                              released={book.year}
                              img={book.image}
                              id={book._id}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Redirect to="/" />
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  favData: () => dispatch(favData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavBooks);
