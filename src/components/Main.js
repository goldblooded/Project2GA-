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
        response.data[elem].id = elem;
        workoutList.push(response.data[elem]);
      });
      this.setState({ workoutList : workoutList });
    }).catch((error) => { console.log(error); });
  }

  addChild(newChild) {
    let currentworkoutList = this.state.workoutList;
    currentworkoutList.push(newChild);
    this.setState({workoutList : currentworkoutList});
  }

  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col sm={6}>
            <WorkoutList children={this.state.workoutList}/>
          </Col>
          <Col sm={6}>
            <NewWorkout newChild={this.addChild.bind(this)}/>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default Main;

