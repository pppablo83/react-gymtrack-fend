import { connect } from 'react-redux'
import { addExercise } from '../../redux/actions/ExercisesActions'
import ExerciseForm from './ExerciseForm'
import { browserHistory } from 'react-router'

const mapStateToProps = (state) => {
  let exercise = {id: null, name: '', category: '', type: ''}
  return { exercise }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(addExercise(values))
      browserHistory.push('exercises')
    }
  }
}

const ExerciseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseForm);

export default ExerciseContainer