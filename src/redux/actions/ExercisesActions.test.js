import * as actions from './action-types'
import { addExercise } from './ExercisesActions'

describe('actions', () => {
  it('should create an action to add an exercise to the list of exercises', () => {
    const exercise = { id: 0, name: "Dumbell Press", category: "Chest" }
    const expectedAction = {
      type: actions.ADD_EXERCISE_TO_LIST_OF_EXERCISES,
      payload: exercise
    }
    expect(addExercise(exercise)).toEqual(expectedAction)
  })
})