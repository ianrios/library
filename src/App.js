
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Book from './pages/Book'
import Account from './pages/Account'
import Catalogue from './pages/Catalogue'

function App() {
  return (

      <Router>
        <div>
          {/* navbar at the top */}
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


          {/* current page */}
          <Switch>

            <Route exact path="/fees">
              <Account />
            </Route>
            <Route path="/catalogue">
              <Catalogue />
            </Route>
            <Route path='/book/:isbn'>
              <Book />
            </Route>
            <Route path={["/", '*']}>
              <Home />
            </Route>
          </Switch>
        </div>
        {/* footer at the top */}
      </Router>




  );
}

export default App;
