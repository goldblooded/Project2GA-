import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import '../App.css';

class Exercise extends Component {
  render() {
    return (
      <div className="Exercise">
        <Header />
        <Menu />
        <h1> Tbis is the Exercise List page </h1>
      </div>
    );
  }
}

export default Exercise;
