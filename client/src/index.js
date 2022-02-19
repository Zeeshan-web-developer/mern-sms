
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import Update from "./pages/updatestudent/Update";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/update/:id">
          <Update />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
