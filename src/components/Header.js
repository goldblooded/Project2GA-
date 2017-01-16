import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import Menu from './Menu';

const Header = () => (
    <Jumbotron>
      <h1> Workout App </h1>
      <p> Keep track of your daily workouts </p>
      <Menu/>
    </Jumbotron>
);

export default Header;
