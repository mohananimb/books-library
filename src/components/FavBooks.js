import React, { Component } from "react";
import Book from "./Books";
import "./css/FavBooks.css";
import { Redirect } from "react-router-dom";
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFav } from "../redux/actions/booksAction";

class FavBooks extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.fetchFav();
  }

  render() {
    const lg = () => {
      localStorage.removeItem("token");
      this.setState({
        redirect: true
      });
    };

    return (
      <div>
        {localStorage.token ? (
          <div>
            {this.props.favBookReducer.length === 0 ? (
              <div className="err">
                <h1>
                  Oh! You have not added any book to your your favorite list
                </h1>
                <Link to="/" className="btn btn-warning btn-block my-3">
                  Let's Add
                </Link>
              </div>
            ) : (
              <div>
                <div className="fb">
                  <Navbar2 log={lg} />
                  <h1 className="heading">MY FAVORITES</h1>
                  <hr />
                  <div className="favBooks">
                    {this.props.favBookReducer.map((book, i) => {
                      if (book.user_id === localStorage.token) {
                        return (
                          <React.Fragment>
                            <Book
                              key={book.id}
                              name={book.name}
                              author={book.author}
                              released={book.released}
                              img={book.img}
                              id={book.book_id}
                            />
                          </React.Fragment>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Redirect to="/login" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favBookReducer: state.favBookReducer.main
});

export default connect(mapStateToProps, { fetchFav })(FavBooks);
