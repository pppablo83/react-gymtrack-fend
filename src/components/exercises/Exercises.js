import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap'

const ExerciseRow = ({name}) => (
  <ListGroupItem>{name}</ListGroupItem>
)

ExerciseRow.PropTypes = {
  name: PropTypes.string.isRequired
}

export default ExerciseRow;
