import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Footer from "./components/footer/Footer";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./styles/main.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="page-container">
          <Switch>
            <Route exect path="/auth">
              <Auth />
            </Route>
            <Route exect path="/product">
              <Product />
            </Route>
            <Route exect path="/">
              <Landing />;
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
