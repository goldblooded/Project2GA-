import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Quotes from './components/Quotes';
import Main from './components/Main';
import Header from './components/Header';

// entry point of app.. sets up routing

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Header />
          <div className="redirects">
            <Match
              exactly pattern="/"
              component={() => <Main/> }
            />
            <Match
              exactly pattern="/Quotes"
              component={() => <Quotes/> }
            />
          </div>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
