import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Workout from './Workout';

class WorkoutList extends Component {
  constructor() {
    super();
    this.state = {
      renderData : (<p> Loading ... </p>)
    };

  }

  componentWillUpdate(newProps) {
    let workouts = newProps.children;
    console.log(workouts);
    let renderData = workouts.map((elem, i) => {
      return (<Workout fields={elem} />);
    });
    this.setState({renderData : renderData});
  }

  render() {
    return (
      <Panel header='Workout List'>
        <ListGroup>
          <ListGroupItem>
            {this.state.renderData}
          </ListGroupItem>
      </ListGroup>
    </Panel>
  )
}
}

export default WorkoutList;

