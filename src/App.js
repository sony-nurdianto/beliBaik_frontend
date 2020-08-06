import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Home from './Pages/Home'
import Artikel1 from './components/artikel/artikel1/Artikel1'
import Artikel2 from './components/artikel/artikel2/Artikel2'
import Artikel3 from './components/artikel/artikel3/Artikel3'
import Artikel4 from './components/artikel/artikel4/Artikel4'
import Artikel7 from './components/artikel/artikel7/Artikel7'
import Artikel8 from './components/artikel/artikel8/Artikel8'

import "animate.css"
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// import "./style.css"

// https://www.youtube.com/watch?v=FZQxPTV3cFk

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/artikel1"><Artikel1 /></Route>
          <Route exact path="/artikel2"><Artikel2 /></Route>
          <Route exact path="/artikel3"><Artikel3 /></Route>
          <Route exact path="/artikel4"><Artikel4 /></Route>
          <Route exact path="/artikel7"><Artikel7 /></Route>
          <Route exact path="/artikel8"><Artikel8 /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
