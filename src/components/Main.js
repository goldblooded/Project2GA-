import React, { Component } from 'react';
import { Panel, Jumbotron, ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
import NewWorkout from './NewWorkout';
import WorkoutList from './WorkoutList';
import axios from 'axios';


// main.js is not visible, it's the container/renderer and starting point for
// all the workout CRUD functionality

const FIREBASE_URL = 'https://workout-app-89f1f.firebaseio.com/.json'

// on page load main workoutList is an empty array of objects from Firebase
// (the new items inputted from add item item component NewItemWorkouot) initial state
class Main extends Component {
  constructor() {
    super();
    this.state = {
      workoutList : []
    };
  }

// object dot keys. take each data. response has other fields. but we just want response.data.
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
    let workoutList = this.state.workoutList;
    // adds new workout to workoutList
    workoutList.push(newChild);
    // set state after new item added
    this.setState({workoutList : workoutList});
    // render called again
  }

  // render calls two components workoutLst (container for all list items)
  // and NewWorkout (add workout)
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
