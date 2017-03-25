import React, { Component } from 'react';
import { values, mapObject, groupBy } from 'underscore';
import ExerciseRow from './Exercises'
import { ListGroup , Panel} from 'react-bootstrap';


class CategorySection extends Component {
  render() {
    const rows = this.props.exercises.map((exercise) => {
      return <ExerciseRow name={exercise.name} key={exercise.id} />;
    });
    return (
      <Panel collapsible defaultExpanded header={this.props.category}>
        <ListGroup fill>
          {rows}    
        </ListGroup>
      </Panel>
    );
  }
}

class ExerciseCategoryTable extends Component {
  render() {
    const exercisesGroupedByCategory = groupBy(this.props.exercises, (exercise) => {
      return exercise.category;
    });
    const categoriesSections = values(mapObject(exercisesGroupedByCategory, (exercises, category) => {
      return <CategorySection category={category} exercises={exercises} key={category} />
    }));
    return (
      <div>{categoriesSections}</div>
    );
  }
}

export default ExerciseCategoryTable;
