import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <h2>Home page</h2>
                </div>
              );
            }}
          />
          <Route
            path="/page2"
            render={() => {
              return (
                <div>
                  <h2>Page 2</h2>
                </div>
              );
            }}
          />
          <Route
            render={() => {
              return (
                <div>
                  <h2>404 Not Found</h2>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
