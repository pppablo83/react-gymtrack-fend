import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseCategoryTable from './Categories';

const EXERCISES = [
    { "id" : 0, "name" : "Bench Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 1, "name" : "Dumbell Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 5, "name" : "Plank", "lang" : "en", "category" : "Abs", "type" : "time", "desc" : "", "logo" : ""},
    { "id" : 6, "name" : "Bycicle", "lang" : "en", "category" : "Cardio", "type" : "distance", "desc" : "", "logo" : ""}
];

it('Categories table renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseCategoryTable exercises={EXERCISES} />, div);
});
