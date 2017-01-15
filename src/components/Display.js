import React, { Component } from 'react';
import '../App.css';
import { Panel, Well } from 'react-bootstrap';
import Drop from './Drop';
import ExerciseItem from './ExerciseItem';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        I am the Display Box
        <Panel>
          <Drop />
          <ExerciseItem />
        </Panel>
      </div>
    );
  }
}

export default Display;
