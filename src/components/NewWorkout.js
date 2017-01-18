import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import axios from 'axios';

const FIREBASE_URL = 'https://workout-app-89f1f.firebaseio.com/.json'

class NewWorkout extends Component {
  onClick() {
    let newWorkout = {
      title : this.title.value,
      duration : this.duration.value,
      intensity : this.intensity.value,
      distance : this.distance.value
    };
    axios.post(FIREBASE_URL, newWorkout).then((response) => {
      console.log(response);
      newWorkout.id = response.data.name;
      this.props.newChild(newWorkout);
    }).catch((error) => {
      alert(error);
    });

    this.title.value ="";
    this.duration.value="";
    this.intensity.value="";
    this.distance.value="";

  }
  render() {
    return (
      <Panel header="Add a new exercise to your list!">
        <Form horizontal>
         <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Title
          </Col>
          <Col sm={10}>
                <FormControl inputRef={(ref) => {this.title=ref}} placeholder="Title" />
          </Col>
          </FormGroup>

          <FormGroup>
           <Col componentClass={ControlLabel} sm={2}>
              Intensity
           </Col>
           <Col sm={10}>
              <FormControl  inputRef={(ref) => {this.intensity=ref}} placeholder="Intensity" />
           </Col>
          </FormGroup>

          <FormGroup>
           <Col componentClass={ControlLabel} sm={2}>
              Distance
           </Col>
           <Col sm={10}>
             <FormControl inputRef={(ref) => {this.distance=ref}} placeholder="Distance" />
           </Col>
          </FormGroup>

          <FormGroup>
           <Col componentClass={ControlLabel} sm={2}>
              Duration
           </Col>
            <Col sm={10}>
              <FormControl  inputRef={(ref) => {this.duration=ref}} placeholder="Duration" />
           </Col>
          </FormGroup>
        </Form>

        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.onClick.bind(this)} >
            Add
          </Button>
        </ButtonToolbar>
      </Panel>
    );
  }
}

export default NewWorkout;



