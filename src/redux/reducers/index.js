import { combineReducers } from 'redux';
import exercisesDataReducer from './ExerciseDataReducer'

const rootReducer = combineReducers({
    exercisesData : exercisesDataReducer
});

export default rootReducer;