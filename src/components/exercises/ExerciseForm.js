import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar, Col, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import FormInputField from '../common/FormInputField'

class ExerciseForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Form horizontal onSubmit={handleSubmit}>
        
        <FormInputField name="name" label="Name"
          inputProps={{type: 'text', component:'input'}}
          labelProps={{xs: 2}} inputColProps={{xs: 10}}
        />

        <FormInputField name="category" label="Category"
          inputProps={{type: 'text', component:'input'}}
          labelProps={{xs: 2}} inputColProps={{xs: 10}}
        />

        <FormGroup controlId="type">
          <Col componentClass={ControlLabel} xs={2} >
            Type
          </Col>
          <Col xs={10}>
            <label><Field name="type" component="input" type="radio" value="weights">
              {this.props.children}
            </Field>Weights & reps</label>
            {'  '}
            <label><Field name="type" component="input" type="radio" value="distance">
              {this.props.children}
            </Field>Distance & time</label>
          </Col>
        </FormGroup>

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
