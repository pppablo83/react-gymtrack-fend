import React, { Component } from 'react';
import { values, mapObject, groupBy } from 'underscore';
import ExerciseRow from './Exercises'
import './Categories.css'

class CategorySection extends Component {
  render() {
    const rows = this.props.exercises.map(function (exercise) {
      return <ExerciseRow name={exercise.name} key={exercise.id} />;
    });
    return (
      <section className="Category-Section">
        <h3>{this.props.category}</h3>
        <ul>
          {rows}
        </ul>
      </section>
    );
  }
}

class ExerciseCategoryTable extends Component {
  render() {
    const exercises = this.props.exercises;
    const exercisesGroupedByCategory = groupBy(exercises, function(exercise) {
      return exercise.category;
    });
    const categoriesSections = values(mapObject(exercisesGroupedByCategory, function (exercises, category) {
      return <CategorySection category={category} exercises={exercises} key={category} />
    }));
    return (
      <div>{categoriesSections}</div>
    );
  }
}

export default ExerciseCategoryTable;
