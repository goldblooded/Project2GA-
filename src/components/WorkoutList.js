import React, { Component } from 'react';
import { Well, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Workout from './Workout';

class WorkoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children : props.children
    };
  }

  componentWillReceiveProps(newProps) {
    if (!this.state || newProps.children !== this.state.children) {
      this.setState({ children : newProps.children});
    }
  }

  rerenderChildren(deletedChildId) {
    let remainingChildren = this.state.children.filter((elem, i) => {
      return elem.id !== deletedChildId;
    });

    this.setState({children : remainingChildren});
    console.log("JERE");
  }

  renderWorkoutComponent() {
    if (this.state.children.length === 0) {
      return (
        <Well>
          <p> Huh... looks like you haven't added any workout items </p>
        </Well>
      );
    }
    else {
      console.log(this.state.children);
      let renderData = this.state.children.map((elem, i) => {
        return (<Workout key={i} id={elem.id} fields={elem} liveChildren={this.rerenderChildren.bind(this)}/>);
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

