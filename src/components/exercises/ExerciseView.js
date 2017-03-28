import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import ExerciseForm from './ExerciseForm'

const ExerciseView = () => (
  <Jumbotron>
    <p>Get jacked now! (just a view)</p>
  </Jumbotron>
)

export default ({exercise, save}) => {
  const renderElement = exercise.id === undefined ? <ExerciseView /> : <ExerciseForm />;
  return renderElement;
}

