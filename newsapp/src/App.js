import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import News from './components/News';
import Navbar from './components/Navbar';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key='general' pageSize={5} country='us' category='general' />} />
            <Route exact path="/business" element={<News key='business' pageSize={5} country='us' category='business' />} />
            <Route exact path="/sport" element={<News key='sports' pageSize={5} country='us' category='sports' />} />
            <Route exact path="/health" element={<News key='health' pageSize={5} country='us' category='health' />} />
            <Route exact path="/technology" element={<News key='technology' pageSize={5} country='us' category='technology' />} />
            <Route exact path="/science" element={<News key='science' pageSize={5} country='us' category='science' />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
