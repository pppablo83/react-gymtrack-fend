import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseCategoryTable from './Exercises/Categories';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const EXERCISES = [
    { "id" : 0, "name" : "Bench Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 1, "name" : "Dumbell Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 2, "name" : "Dumbell Incline Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 3, "name" : "Leg Press", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 4, "name" : "Barbell Squat", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 5, "name" : "Plank", "lang" : "en", "category" : "Abs", "type" : "time", "desc" : "", "logo" : ""},
    { "id" : 6, "name" : "Bycicle", "lang" : "en", "category" : "Cardio", "type" : "distance", "desc" : "", "logo" : ""}
];

ReactDOM.render(
  <ExerciseCategoryTable exercises={EXERCISES} />,
  document.getElementById('root')
);
