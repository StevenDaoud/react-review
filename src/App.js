import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/global/header/';
import HomePage from './components/pages/home/';
import TacoImagePage from './components/pages/tacoImagePage/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/images/" component={TacoImagePage}/>
            <Route exact path="/images/:id" component={TacoImagePage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
