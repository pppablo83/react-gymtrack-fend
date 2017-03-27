import React, { PropTypes } from 'react';
import { ListGroupItem, FormGroup, FormControl } from 'react-bootstrap'

const ExerciseRow = ({name}) => (
  <ListGroupItem>{name}</ListGroupItem>
)

ExerciseRow.PropTypes = {
  name: PropTypes.string.isRequired
}

const ExerciseSearchBar = ({filterText, filter}) => {

  const handleChange = (e) => {
    filter(e.target.value);
  }

  return (
    <form>
      <FormGroup controlId="formBasicText">
        <FormControl type="text" placeholder="Search per name..." 
          value={filterText} onChange={handleChange}/>
        <FormControl.Feedback />
      </FormGroup>
    </form>
  )
}

export { ExerciseRow, ExerciseSearchBar };
