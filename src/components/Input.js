import React, { Component } from 'react';
import '../App.css';
import { Panel, Jumbotron, ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';

class ExerciseItem extends Component {
   render() {
       return (
          <div className="App">
            <Panel>
                <Form horizonal>
                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                        Title
                      </Col>
                      <Col sm={10}>
                        <FormControl placeholder="Title" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                        Intensity
                      </Col>
                      <Col sm={10}>
                          <FormControl placeholder="Intensity" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                        Distance
                      </Col>
                      <Col sm={10}>
                        <FormControl placeholder="Distance" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                        Duration
                      </Col>
                      <Col sm={10}>
                        <FormControl placeholder="Duration" />
                      </Col>
                    </FormGroup>

                  </Form>

                    <ButtonToolbar>
                      <Button bsStyle="success"> Add </Button> { /* setting bsStyle=success renders green button */}
                    </ButtonToolbar>

          </Panel>

              <Panel>
                  <Form horizonal>
                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                              Title
                      </Col>
                      <Col sm={10}>
                              <FormControl placeholder="Title" />
                          </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                              Intensity
                      </Col>
                      <Col sm={10}>
                              <FormControl placeholder="Intensity" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                           Distance
                      </Col>
                      <Col sm={10}>
                              <FormControl placeholder="Distance" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col componentClass={ControlLabel} sm={2}>
                                Duration
                      </Col>
                      <Col sm={10}>
                          <FormControl placeholder="Duration" />
                      </Col>
                    </FormGroup>

                      <ButtonToolbar>
                        <Button bsStyle="info"> Edit </Button> { /* setting bsStyle=info renders blue button */}
                        <Button bsStyle="danger"> Delete </Button> { /* setting bsStyle=red renders red button */}
                      </ButtonToolbar>

                  </Form>

                </Panel>
            </div>
        );
    }
}

export default ExerciseItem;
