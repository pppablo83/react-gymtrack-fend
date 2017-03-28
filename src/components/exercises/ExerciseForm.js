import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ExerciseForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="Category">Category</label>
          <Field name="category" component="input" type="text"/>
        </div>
        <div>
        <label>Sex</label>
        <div>
          <label><Field name="type" component="input" type="radio" value="weights"/>Weights & Reps</label>
          <label><Field name="type" component="input" type="radio" value="distance"/> Distance & Time</label>
        </div>
      </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ExerciseForm = reduxForm({
  form: 'exercise'
})(ExerciseForm);

export default ExerciseForm;
