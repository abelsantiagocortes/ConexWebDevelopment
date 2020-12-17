import React from 'react';
import NavBar from './components/NavBar';
import Bienvenidos from './components/Bienvenidos';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import SobreMi from './components/SobreMi';
import Terapias from './components/Terapias';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Router>
          <div className="app">
            <Switch>
              <Route path="/bienvenidos">
                <NavBar active="welcome"/>
                <Bienvenidos />
                <Footer/>

              </Route>
              <Route path="/sobremi">
              <NavBar active="aboutme"/>
                <SobreMi />
                <Footer/>

              </Route>
              <Route path="/terapias">
              <NavBar active="terap"/>
                <Terapias />
                <Footer/>

              </Route>
              <Route path="/blog">
              <NavBar active="blog"/>
                <Blog />
                <Footer/>

              </Route>

              <Route path="/contacto">
              <NavBar active="contact"/>
                <Contacto />
                <Footer/>
              </Route>

              <Route path="/">
              <NavBar active="welcome"/>
                <Bienvenidos />
                <Footer/>

              </Route>

            </Switch>
          </div>
        </Router>

      </div>

  );
}

export default App;
