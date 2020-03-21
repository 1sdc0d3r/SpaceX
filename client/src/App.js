import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import "./App.css";
import logo from "./logo.jpg";

const client = new ApolloClient({
  uri: "https://space-x-stats.herokuapp.com/graphql"
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <div className="container">
              <img id="logo" src={logo} alt="logo" />
              <Switch>
                <Route path="/launch/:flight_number" component={Launch} />
                <Route exact path="/" component={Launches} />
              </Switch>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}
