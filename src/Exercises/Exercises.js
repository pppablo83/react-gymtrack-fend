import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap'

class ExerciseRow extends Component {
  render() {
    return (
        <ListGroupItem>{ this.props.name}</ListGroupItem>
    );
  }
}

export default ExerciseRow;
