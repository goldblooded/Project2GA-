import React, { Component } from 'react';
import { Panel, Jumbotron, ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
import NewWorkout from './NewWorkout';
import WorkoutList from './WorkoutList';
import axios from 'axios';

const FIREBASE_URL = 'https://workout-app-89f1f.firebaseio.com/.json'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      workoutList : []
    };
  }

  componentDidMount() {
    axios.get(FIREBASE_URL).then((response) => {
      let workoutList = [];
      Object.keys(response.data).map((elem, i) => {
        workoutList.push(response.data[elem]);
      });

      this.setState({ workoutList : workoutList });
    }).catch((error) => { console.log(error); });
  }

  render() {
    console.log("HERE"); console.log(this.state.workoutList);
    return (
      <Grid>
        <Row className='show-grid'>
          <Col sm={6}>
            <WorkoutList children={this.state.workoutList}/>
            }
          </Col>
          <Col sm={6}>
            <NewWorkout />
          </Col>
        </Row>
      </Grid>

    );
  }

}

export default Main;

