import React, { Component } from 'react';
import '../App.css';
import {Panel, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <Panel>
        <ButtonToolbar>
          <ButtonGroup bsSize="large">
              <Button>
                <Link to={`/`}> Today Workout </Link>
              </Button>
              <Button>
                <Link to={`/`}> Exercise List> </Link>
              </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Panel>
    );
  }
}

export default Menu;
