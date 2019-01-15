import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Favourite from './components/favourite/Favourite';
import Ok from './components/favourite/Ok';

import Footer from './components/layout/Footer'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/fav" component={Favourite} />
              <Route exact path="/ok" component={Ok} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
