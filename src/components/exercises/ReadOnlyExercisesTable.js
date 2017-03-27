import { connect } from 'react-redux'
import { filterExercises } from '../../redux/actions/ExercisesActions'
import { FilterableExercisesPerCategoryList } from './Categories'

const filterByName = (array, filterText) => {
  if(filterText.length > 0) {
    return array.filter(el => el.name.toLowerCase().indexOf(filterText) !== -1)
  } else {
    return array    
  }
}

const mapStateToProps = (state) => (
  {
    exercisesData : Object.assign({}, 
                                state.exercisesData,
                                {exercises : 
                                  filterByName(state.exercisesData.exercises, state.exercisesData.filterText)})
  }
)

const ReadOnlyExercisesTable = connect(
  mapStateToProps,
  {filter: filterExercises}
)(FilterableExercisesPerCategoryList);

export default ReadOnlyExercisesTable