import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Workout from './Workout';

class WorkoutList extends Component {
  renderWorkouts() {
    let workouts = this.props.children;
    return workouts.map((elem, i) => {
      return (<Workout fields={elem} />);
    });
  }
  render() {
    return (
      <Panel header='Workout List'>
        <ListGroup>
          <ListGroupItem> 
            {this.renderWorkouts}
          </ListGroupItem>
      </ListGroup>
    </Panel>
  )
}
}

export default WorkoutList;

