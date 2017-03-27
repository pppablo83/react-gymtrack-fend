import * as types from '../actions/action-types'

export default (state = {}, action) => {
    switch (action.type) {
        case types.ADD_EXERCISE_TO_LIST_OF_EXERCISES: {
            const exercise = action.payload;
            return Object.assign({}, state, {exercises: [
                ...state.exercises, 
                {
                    id: exercise.id,
                    name: exercise.name,
                    category: exercise.category
                }
            ]})    
        }
        case types.LOAD_EXERCISES: {
            return action.payload;
        }
        case types.FILTER_EXERCISES_PER_NAME: {
            return Object.assign({}, state, {filterText: action.payload})
        }
        default:
            return state;       
    }
}