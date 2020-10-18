import React from 'react';
import NavBar from './components/NavBar';
import Bienvenidos from './components/Bienvenidos';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import SobreMi from './components/SobreMi';
import Terapias from './components/Terapias';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/bienvenidos">
              <NavBar></NavBar>
              <Bienvenidos />

            </Route>
            <Route path="/sobremi">
              <NavBar></NavBar>
              <SobreMi />

            </Route>
            <Route path="/terapias">
              <NavBar></NavBar>
              <Terapias />

            </Route>
            <Route path="/blog">
              <NavBar></NavBar>
              <Blog />

            </Route>

            <Route path="/contacto">
              <NavBar></NavBar>
              <Contacto />
            </Route>

            <Route path="/">
              <NavBar></NavBar>
              <Bienvenidos />

            </Route>

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
