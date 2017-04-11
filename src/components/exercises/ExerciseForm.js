import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button, ButtonToolbar, Col, Form, FormGroup } from 'react-bootstrap'
import FormInputField from '../common/FormInputField'

class ExerciseForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        
        <FormInputField name="name" label="Name" placeholder="Exercise name"
          inputProps={{type: 'text'}}
        />

        <FormInputField name="category" label="Category" placeholder="Exercise category"
          inputProps={{type: 'text'}}
        />

        <FormInputField name="type" label="Type" placeholder="Weights & reps"
          inputProps={{type: 'select', 
                      options: [{value: "Weights & reps", text: "Weights & reps"}
                                , {value: "Distance & time", text: "Distance & time"}]}}
        />

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
              <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
            </ButtonToolbar>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

ExerciseForm = reduxForm({
  form: 'exercise',
  fields: ['name', 'category', 'type'],
  touchOnChange: true,
  validate(exercise) {
    var errors = {}
    if (!exercise.name) errors.name = 'Please enter name.'
    if (!exercise.category) errors.category = 'Please enter a category.'
    if (!exercise.type) errors.type = 'Please enter a type.'
    return errors
  }
})(ExerciseForm);

export default ExerciseForm;
