import { connect } from 'react-redux'
import ExercisesPerCategoryList from './Categories'

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
}

const ReadOnlyExercisesTable = connect(
  mapStateToProps
)(ExercisesPerCategoryList);

export default ReadOnlyExercisesTable