import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Speakers from './Components/Speakers';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/speakers" component={Speakers} />
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
