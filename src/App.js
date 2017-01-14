import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import {Panel, Jumbotron, ListGroup, ListGroupItem, Grid, Row, Col} from 'react-bootstrap';
import Display from './components/Disp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
            <h1> Your Workout App </h1>
            <p> Use this app to keep track of and create your daily workouts. </p>
        </Jumbotron>
        <Disp />
      </div>
    );
  }
}

export default App;

