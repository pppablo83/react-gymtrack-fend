import * as actions from './action-types'
import { addExercise } from './ExercisesActions'
import { loadExercises } from './ExercisesActions'

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

describe('actions', () => {
  it('should create an action to load the fixed list of exercises', () => {
    const EXERCISES = [
        { "id" : 0, "name" : "Bench Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 1, "name" : "Dumbell Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 2, "name" : "Dumbell Incline Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 3, "name" : "Leg Press", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 4, "name" : "Barbell Squat", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 5, "name" : "Plank", "lang" : "en", "category" : "Abs", "type" : "time", "desc" : "", "logo" : ""},
        { "id" : 6, "name" : "Bycicle", "lang" : "en", "category" : "Cardio", "type" : "distance", "desc" : "", "logo" : ""}
    ];
    const expectedAction = {
      type: actions.LOAD_EXERCISES,
      payload: EXERCISES
    }
    expect(loadExercises()).toEqual(expectedAction)
  })
})