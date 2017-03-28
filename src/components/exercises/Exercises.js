import React, { PropTypes } from 'react';
import { ListGroupItem, FormGroup, FormControl, Form, Button } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'

const ExerciseRow = ({name}) => (
  <ListGroupItem>{name}</ListGroupItem>
)

ExerciseRow.PropTypes = {
  name: PropTypes.string.isRequired
}

const ExercisesHeader = ({filterText, filter}) => (
  <Form inline>
    <FormGroup controlId="formBasicText">
      <ExerciseSearchBar filterText={filterText} filter={filter}/>
      <AddExerciseButton />
    </FormGroup>
  </Form>  
)

const ExerciseSearchBar = ({filterText, filter}) => {
  const handleChange = (e) => {
    filter(e.target.value);
  }
  return (
      <FormControl type="text" placeholder="Search per name..." 
        value={filterText} onChange={handleChange}/>
  )
}

const AddExerciseButton = () => (
  <LinkContainer to="/exercises/new">
    <Button bsStyle="primary">Add Exercise</Button>
  </LinkContainer>
)

export { ExerciseRow, ExerciseSearchBar, ExercisesHeader };
