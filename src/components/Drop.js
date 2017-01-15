import React, { Component } from 'react';
import '../App.css';
import {Panel, Jumbotron, ListGroup, ListGroupItem, Grid, Row, Col} from 'react-bootstrap';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class Drop extends Component {
  render() {
    return (
      <div className="Drop">
        <p> This is the Drop Down </p>
        <DropdownButton title="Drop">
          <MenuItem> Item 1</MenuItem>
          <MenuItem> Item 2</MenuItem>
          <MenuItem> Item 3</MenuItem>
          <MenuItem> Item 4</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

export default Drop;
