import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'


function App() {
  return (
    <div>

      <Router>
        <Header />

        <HelloWorld name="Drake"/>

              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
              </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
