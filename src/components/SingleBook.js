import React, { Component } from "react";
import "./styles/SingleBook.scss";
import Navbar2 from "./Navbar2";
import { Redirect } from "react-router-dom";
import swal from "@sweetalert/with-react"

export default class SingleBook extends Component {
  state = {
    book: [],
    redirect: false
  };

  componentDidMount() {
    fetch("http://localhost:5000/favorite-books", {
      method: "GET",
      headers: {
        "Authorization": JSON.parse(localStorage.token)
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          book: data.filter(item => item._id === this.props.match.params.id)
        });
      });
  }

  render() {
    const { book } = this.state;
    const lg = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("email")
    };

    const del = e => {
      fetch(`http://localhost:5000/favorite-books/${e.target.id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": JSON.parse(localStorage.token)
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          swal("Done", "You have successfully removed this item", "success")
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
                                src={item.image}
                                className="card-img-top"
                                alt={item.title}
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  <strong>Title:</strong> {item.title}
                                </h5>
                                <p className="card-text">
                                  <strong>Author:</strong> {item.author}
                                </p>
                                <p className="card-text">
                                  <strong>Released On:</strong>{" "}
                                  {item.year.substr(0, 10)}
                                </p>
                              </div>
                            </div>
                            <button
                              key={i}
                              onClick={del}
                              id={item._id}
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
