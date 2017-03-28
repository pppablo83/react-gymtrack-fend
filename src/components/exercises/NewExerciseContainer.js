import { connect } from 'react-redux'
import { addExercise } from '../../redux/actions/ExercisesActions'
import ExerciseForm from './ExerciseForm'

const mapStateToProps = (state) => {
  let exercise = {id: null, name: '', category: '', type: ''}
  return { exercise }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(addExercise(values))
    }
  }
}

const ExerciseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseForm);

export default ExerciseContainer