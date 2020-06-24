import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Home from './Pages/Home'
import "animate.css"
import {HashRouter  as Router, Switch, Route} from 'react-router-dom'
// import "./style.css"

// https://www.youtube.com/watch?v=FZQxPTV3cFk

function App() {
  return (
    <div>
     <Router>
        <Navbar/>
       <Switch>
         <Route exact path="/"><Home/></Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
