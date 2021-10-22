import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contactus from './components/pages/Contactus';
import Team from './components/pages/Team';
import Careers from './components/pages/Careers';
import Collaborations from './components/pages/Collaborations'
import termsofservice from './components/pages/termsofservice';

function App() {
  return (
  <>
  <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contactus' component={Contactus} />
        <Route path='/team' component={Team} />
        <Route path='/careers' component={Careers} />
        <Route path='/collaborations' component={Collaborations} />
        <Route path='/termsofservice' component={termsofservice} />
      </Switch>
      </Router>
  </>
  );
}

export default App;
