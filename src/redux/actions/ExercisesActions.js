import * as types from './action-types'

const addExercise = (exercise) => {
    return {
        type: types.ADD_EXERCISE_TO_LIST_OF_EXERCISES,
        payload: exercise
    }
}

export { addExercise };