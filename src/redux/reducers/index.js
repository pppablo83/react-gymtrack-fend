import { combineReducers } from 'redux';
import exercises from './ExercisesReducer'

const rootReducer = combineReducers({
    exercises
});

export default rootReducer;