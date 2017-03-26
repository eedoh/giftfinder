import React, { Component } from 'react';
import SearchResults from './SearchResults';
import './App.css';

//let heroImg = './hero.jpg';
import heroImg from './hero.jpg';

var headerStyle = {
  background: "url(" + heroImg + "), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

class App extends Component {
  componentDidMount(){
    console.log(heroImg)
  }
  render() {
    return (
      <div className="content">
        <header className="header" style={headerStyle}>
          <div className="header__inner">
            <h1 className="header__title">I'm looking for a </h1>
            <div className="header__search">
              <input type="search" />
            </div>
          </div>
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
