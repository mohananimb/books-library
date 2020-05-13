import React, { Component } from "react";
import "./styles/SingleBook.scss";
import Navbar2 from "./Navbar2";
import { Redirect } from "react-router-dom";

export default class SingleBook extends Component {
  state = {
    book: [],
    redirect: false
  };

  componentDidMount() {
    fetch("https://5eb82be6bb17460016b326b8.mockapi.io/favorite-books")
      .then(res => res.json())
      .then(data => {
        this.setState({
          book: data.filter(item => item.book_id === this.props.match.params.id)
        });
      });
  }

  render() {
    const { book } = this.state;
    const lg = () => {
      localStorage.removeItem("token");
    };

    const del = e => {
      fetch(
        `https://5eb82be6bb17460016b326b8.mockapi.io/favorite-books/${e.target.id}`,
        {
          method: "DELETE"
        }
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            redirect: true
          });
        });
    };

    return (
      <div>
        <div>
          {this.state.redirect ? (
            <Redirect to="/favorite-books" />
          ) : (
            <div>
              {localStorage.token ? (
                <div className="singleBook">
                  <Navbar2 log={lg} />
                  <div className="fetchBook">
                    {book.map((item, i) => (
                      <div key={i} className="row col-lg-3 col-md-6">
                        <div className="books">
                          <div className="card">
                            <img
                              src={item.img}
                              className="card-img-top"
                              alt={item.name}
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                <strong>Title:</strong> {item.name}
                              </h5>
                              <p className="card-text">
                                <strong>Author:</strong> {item.author}
                              </p>
                              <p className="card-text">
                                <strong>Released On:</strong>{" "}
                                {item.released.substr(0, 10)}
                              </p>
                            </div>
                          </div>
                          <button
                            key={i}
                            onClick={del}
                            id={item.id}
                            className="btn btn-danger btn-block"
                          >
                            Remove from Favorites
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Redirect to="/" />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
