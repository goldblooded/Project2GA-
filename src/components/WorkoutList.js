import React, { Component } from 'react';
import { Well, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Workout from './Workout';

// initial state on first time page load is empty list
class WorkoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children : props.children
    };
  }

  // new set of props received from main.js (as a result of adding a new workout)
  componentWillReceiveProps(newProps) {
    // if the current state is not set or if the new props that we received
    // is NOT equal to the current state (this means that the array of children has changed)
    // then update the current state to be the new updated children. Needed to do this as
    // (componentWillReceiveProps) was called too many times and crashed the app.
    // From React documentation: you cannot call this.setState() here.
    // If you need to update state in response to a prop change, use componentWillReceiveProps() instead.
    if (!this.state || newProps.children !== this.state.children) {
      this.setState({ children : newProps.children});
    }
  }

  deleteChild(deletedChildId) {
    let remainingChildren = this.state.children.filter((elem, i) => {
      return elem.id !== deletedChildId;
    });

    this.setState({children : remainingChildren});
  }

  renderWorkoutComponent() {
    if (this.state.children.length === 0) {
      return (
        <Well>
          <p> Looks like you haven't added any workout items, you lazy bum. </p>
        </Well>
      );
    }
    else {
      console.log(this.state.children);
      let renderData = this.state.children.map((elem, i) => {
        return (<Workout key={i} id={elem.id} fields={elem} deleteChild={this.deleteChild.bind(this)}/>);
      });
      return renderData;
    }
  }

  render() {
    return (
      <Panel header='Workout List'>
        {this.renderWorkoutComponent()}
      </Panel>
    );
  }
}

export default WorkoutList;

