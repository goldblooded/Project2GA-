import React, { Component } from 'react';
import '../App.css';
import { Panel, Col, Well, ButtonToolbar, Button } from 'react-bootstrap';

class Workout extends Component {
  render() {
    return (
      <div className="workout" >
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
              <Button bsStyle="info"> Edit </Button> { /* setting bsStyle=info renders blue button */}
              <Button bsStyle="danger"> Delete </Button> { /* setting bsStyle=red renders red button */}
          </ButtonToolbar>
      </div>
    );
  }
}

export default Workout;
