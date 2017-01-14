import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import {ButtonToolbar, ButtonGroup, Button, Panel} from 'react-bootstrap';

class Menu extends Component {
    render() {
        return (
            <Panel>
                <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                        <Button> Today Workout </Button>
                        <Button> Exercise List </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Panel>
        );
    }
}

export default Menu;
