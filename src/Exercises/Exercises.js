import React, { Component } from 'react';

class ExerciseRow extends Component {
  render() {
    const name = this.props.name;
    return (
        <li>{name}</li>
    );
  }
}

export default ExerciseRow;
