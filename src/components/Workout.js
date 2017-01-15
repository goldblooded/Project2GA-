import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Menu from './Menu';
import Display from './Display';

class Workout extends Component {
  render() {
    return (
        <div className="Workout">
          <Header />
          <Menu />
          <h1> Todays Workout Page </h1>
        </div>
    );
  }
}

export default Workout;
