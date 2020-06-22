import React, { Component } from "react";
import "./styles/SingleBook.scss";
import Navbar2 from "./Navbar2";
// import { Redirect } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { connect } from "react-redux";

class SingleBook extends Component {
  render() {
    let book = this.props.state.favBooks.favBooks.filter(
      item => item._id === this.props.match.params.id
    );

    const lg = () => {
      localStorage.removeItem("token");
    };

    const del = e => {
      fetch(`http://localhost:5000/favorite-books/${e.target.id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(res => res.json())
        .then(data => {
          swal("Done", "You have successfully removed this item", "success")
          .then(() => window.location = "/favorite-books")
        });
    };

    return (
      <div>
        <div>
          {null ? (
            {
              /*<Redirect to="/favorite-books" /> */
            }
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
                {
                  /*  <Redirect to="/" /> */
                }
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(SingleBook);
