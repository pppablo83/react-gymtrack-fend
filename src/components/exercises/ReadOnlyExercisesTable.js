import { connect } from 'react-redux'
import { filterExercises } from '../../redux/actions/ExercisesActions'
import { getFilteredExercises } from '../../redux/selectors'
import { FilterableExercisesPerCategoryList } from './Categories'

const mapStateToProps = (state) => (
  {
    exercisesData : Object.assign({}, 
                                state.exercisesData,
                                {exercises : getFilteredExercises(state.exercisesData)})
  }
)

const ReadOnlyExercisesTable = connect(
  mapStateToProps,
  {filter: filterExercises}
)(FilterableExercisesPerCategoryList);

export default ReadOnlyExercisesTable