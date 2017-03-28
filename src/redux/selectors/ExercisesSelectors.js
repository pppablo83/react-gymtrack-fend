import { createSelector } from 'reselect'

const getFilterTextForExercises = (exercisesData) => exercisesData.filterText
const getExercises = (exercisesData) => exercisesData.exercises

const getFilteredExercises = createSelector(
  [ getFilterTextForExercises, getExercises ],
  (filterText, exercises) => {
    if(filterText.length > 0) {
        return exercises.filter(el => {
            return el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
        })
    } else {
        return exercises
    }
  }
)

export { getFilteredExercises }