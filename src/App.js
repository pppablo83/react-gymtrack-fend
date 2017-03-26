import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import ReadOnlyExercisesTable from './Exercises/ReadOnlyExercisesTable'

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>Gym Tracker</PageHeader>
        <ReadOnlyExercisesTable />
      </div>
    );
  }
}

export default App;