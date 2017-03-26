import * as types from '../actions/action-types'

export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_EXERCISE_TO_LIST_OF_EXERCISES: {
            const exercise = action.payload;
            return [
                ...state,
                {
                    id: exercise.id,
                    name: exercise.name,
                    category: exercise.category
                }
            ]    
        }
        case types.LOAD_EXERCISES: {
            return action.payload;
        }
        default:
            return state;       
    }
}