import { combineReducers } from 'redux';
import exercisesDataReducer from './ExerciseDataReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    exercisesData : exercisesDataReducer,
    form: formReducer
});

export default rootReducer;