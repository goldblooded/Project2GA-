import React, { Component } from 'react';
import '../App.css';
import { Panel, Col, Well, ButtonToolbar, Button } from 'react-bootstrap';
import axios from 'axios';

const FIREBASE_URL = 'https://workout-app-89f1f.firebaseio.com/';

class Workout extends Component {
  removeWorkout() {
    let url = FIREBASE_URL + this.props.id + '/.json';
    axios.delete(url).then(() => {
      console.log('deleted ' + this.props.id);
    }).catch((error) => { console.log(error)});
    // Lifting state - - telling the parent (WorkoutList) to remove the item with this.props.id
    // tell parent in this list of items you have remove this.props.id. From Erik's React lesson.
    this.props.deleteChild(this.props.id);

  }

  // editWorkout() {
  //   const url = FIREBASE_URL + this.props.id + '/.json';
  //   axios.patch(url, {
  //     Title: this.state.title,
  //     Intensity: this.state.intensity,
  //   }).then((response) => {
  //     console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  // edit button on click code for button toolbar
// {onClick={this.editWorkout.bind(this)}

  render() {
    return (
      <div className="workout" >
        <Panel>
            <Col sm={2}>
                Title
            </Col>
            <Col sm={10}>
                <Well bsSize="small"> {this.props.fields.title} </Well>
            </Col>

            <Col sm={2}>
                Distance
            </Col>
            <Col sm={10}>
                <Well bsSize="small"> {this.props.fields.distance} </Well>
            </Col>

            <Col sm={2}>
                Duration
            </Col>
            <Col sm={10}>
                <Well bsSize="small"> {this.props.fields.duration} </Well>
            </Col>

            <Col sm={2}>
                Intensity
            </Col>
            <Col sm={10}>
                <Well bsSize="small"> {this.props.fields.intensity} </Well>
            </Col>
            <ButtonToolbar>
                <Button bsStyle="info" ref="edit"> Edit </Button>
                <Button bsStyle="danger" ref="delete" onClick={this.removeWorkout.bind(this)}> Delete </Button>
            </ButtonToolbar>
          </Panel>
      </div>
    );
  }
}

export default Workout;
