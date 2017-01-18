import React, { Component } from 'react';
import '../App.css';
import { ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <ButtonToolbar className="menu--button-toolbar">
        <ButtonGroup bsSize="large">
            <Button>
              <Link style={{textDecoration: 'none'}} to={`/`}> Home </Link>
            </Button>
            <Button>
              <Link style={{textDecoration: 'none'}} to={`/Quotes`}> Motivate Me! </Link>
            </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default Menu;
