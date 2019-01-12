import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Favourite from './components/favourite/Favourite';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/fav" component={Favourite} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
