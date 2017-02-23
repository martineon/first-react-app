import React, { Component } from 'react';
import './App.css';
import Footer from './footer.js';
import Header from './header.js';
import Section1 from './section1.js';
import Section2 from './section2.js';

class App extends Component {
  render() {
    return (
      <div className="Containe">
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      </div>
    );
  }
}

export default App;
