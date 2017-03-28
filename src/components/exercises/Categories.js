import React, { PropTypes } from 'react';
import { values, mapObject, groupBy } from 'underscore';
import { ExerciseRow, ExercisesHeader } from './Exercises'
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

const ExercisesPerCategoryList = ({exercises}) => {
  const exercisesGroupedByCategory = groupBy(exercises, (exercise) => {
      return exercise.category;
    });
  const categoriesSections = values(mapObject(exercisesGroupedByCategory, (exercises, category) => {
      return <CategorySection category={category} exercises={exercises} key={category} />
    }));

  return (
    <div>{categoriesSections}</div>
  )
}

ExercisesPerCategoryList.PropTypes = {
  exercises: PropTypes.array.isRequired
}

const FilterableExercisesPerCategoryList = ({exercisesData, filter }) => (
  <div>
    <ExercisesHeader filterText={exercisesData.filterText} filter={filter}/>
    <ExercisesPerCategoryList exercises={exercisesData.exercises} />
  </div>
)

export { ExercisesPerCategoryList, FilterableExercisesPerCategoryList };
