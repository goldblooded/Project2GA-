import React, { Component } from 'react';
import './App.css';
import Workout from './components/Workout';
import Exercise from './components/Exercise';
import { BrowserRouter, Match, Miss } from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <div className="redirects">
            <Match
              exactly pattern="/"
              component={() => <Workout />}
            />
            <Match
              exactly pattern="/ExerciseList"
              component={() => <Exercise /> }
            />
          </div>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;

