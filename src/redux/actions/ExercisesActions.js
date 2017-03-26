import * as types from './action-types'

const loadExercises = () => {

    //TODO change by API call
    const EXERCISES = [
        { "id" : 0, "name" : "Bench Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 1, "name" : "Dumbell Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 2, "name" : "Dumbell Incline Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 3, "name" : "Leg Press", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 4, "name" : "Barbell Squat", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
        { "id" : 5, "name" : "Plank", "lang" : "en", "category" : "Abs", "type" : "time", "desc" : "", "logo" : ""},
        { "id" : 6, "name" : "Bycicle", "lang" : "en", "category" : "Cardio", "type" : "distance", "desc" : "", "logo" : ""}
    ];

    return {
        type: types.LOAD_EXERCISES,
        payload: EXERCISES
    }
}

const addExercise = (exercise) => {
    return {
        type: types.ADD_EXERCISE_TO_LIST_OF_EXERCISES,
        payload: exercise
    }
}

export { addExercise, loadExercises };