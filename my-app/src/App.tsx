import React from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Checkout } from "./components/home/Checkout";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
