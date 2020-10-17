import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Footer from "./components/footer/Footer";

import "./styles/main.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="page-container">
          <Switch>
            <Route exect path="/auth">
              <Auth />
            </Route>
            <Route exect path="/">
              <Landing />;
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
