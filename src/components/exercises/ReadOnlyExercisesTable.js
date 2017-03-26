import { connect } from 'react-redux'
import ExercisesPerCategoryList from './Categories'

const mapStateToProps = (state) => {
  return state;
}

const ReadOnlyExercisesTable = connect(
  mapStateToProps
)(ExercisesPerCategoryList);

export default ReadOnlyExercisesTable