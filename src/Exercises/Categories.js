import React, { Component, PropTypes } from 'react';
import { values, mapObject, groupBy } from 'underscore';
import ExerciseRow from './Exercises'
import { ListGroup , Panel} from 'react-bootstrap';

const CategorySection = ({category, exercises}) => (
  <Panel collapsible defaultExpanded header={category}>
      <ListGroup fill>
        {exercises.map(e => {
          return <ExerciseRow name={e.name} key={e.id} />
        })}
      </ListGroup>
  </Panel>
)

CategorySection.PropTypes = {
  category: PropTypes.string.isRequired,
  exercises: PropTypes.array.isRequired
}

class ExercisesPerCategoryList extends Component {
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

ExercisesPerCategoryList.PropTypes = {
  exercises: PropTypes.array.isRequired
}

export default ExercisesPerCategoryList;
