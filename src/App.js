import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Provider } from "react-redux";
import User from "./components/User";
import Protected from "./components/Secure/Protected";
import store from "./store";
import FavBooks from "./components/FavBooks";
import SingleBook from "./components/SingleBook";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route
              path="/register"
              component={props => <Register {...props} />}
            />
            <Route exact path="/favorite-books" component={FavBooks} />
            <Route path="/favorite-books/:id" component={SingleBook} />
            <Route>
              <Protected compo={User} />
            </Route>
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
