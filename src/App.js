import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Summary from './components/Summary/Summary';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/summary' component={Summary} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}