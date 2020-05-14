import React from "react";
import "./styles/Books.scss";
import Button from "./Button";
import { Link } from "react-router-dom";
import swal from '@sweetalert/with-react'
import {throttle} from "./Throttle"

const Books = ({ name, img, author, released, id }) => {

  const handleClick = e => {
    
    if (localStorage.token) {
      let fevBook = {
        book_id: id,
        user_id: localStorage.token,
        author: author,
        name: name,
        released: released,
        img: img
      };
      fetch("https://5eb82be6bb17460016b326b8.mockapi.io/favorite-books", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(fevBook)
      }).then(res => res.json());
      swal("Awesome!", "You have just added your book to favorite list!", "success");
    }
  };
  
  const main = throttle(handleClick, 3000);

  return (
    <div className="row col-lg-3 col-md-6">
      <div className="books">
        <div className="card">
          <img src={img} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Title:</strong> {name}
            </h5>
            <p className="card-text">
              <strong>Author:</strong> {author}
            </p>
            <p className="card-text">
              <strong>Released On:</strong> {released.substr(0, 10)}
            </p>
          </div>
          {localStorage.token ? (
            <div className="manage-buttons">
              <Button
                title="Add to Favorite"
                class="btn btn-dark btn-block botton"
                func={main}
              />
              <Link className="btn btn-dark details" to={`/favorite-books/${id}`}>Details</Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Books;
