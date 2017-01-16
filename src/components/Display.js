import React, { Component } from 'react';
import '../App.css';
import { Panel, Well } from 'react-bootstrap';
import Drop from './Drop';
import Exercise from './Exercise'

class Display extends Component {
  render() {
    return (
      <div className="Display">
        I am the Display Box
        <Panel>
          <Drop />
          <Exercise />
        </Panel>
      </div>
    );
  }
}

export default Display;
