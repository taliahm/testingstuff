import React, {Component} from 'react';
import './App.css'
import About from './About.js';
import Contact from './Contact.js'
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
class App extends Component  {
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav>
        <NavLink exact to='/' activeClassName="currentPage">Home</NavLink>
        <NavLink to="/about" activeClassName="currentPage">About</NavLink>
        <NavLink to="/contact/jfjfjfjf" activeClassName="currentPage">Contact</NavLink>
        </nav>
        <Route path='/contact/:human' component={ Contact }/>
        <Route exact path ='/' component={ Home }/>
        <Route path='/about' component={ About }/>
      </div>
    </Router>
  );
}
}
export default App;