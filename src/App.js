import React, { Component } from 'react';
import SearchResults from './SearchResults';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <header className="header">
          <div className="header__navigation">1</div>
          <div className="header__header title">2</div>
        </header>
        
        <SearchResults />

        <footer id="footer" className="footer">
          <p>&copy; 2017 - Giftfinder</p>
        </footer>
      </div>
    );
  }
}

export default App;
