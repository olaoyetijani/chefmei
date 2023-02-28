import React, { Component } from 'react';
import { About, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    );
  }
}

export default App;
