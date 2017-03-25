import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
//import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import createStore from './redux/store'

const EXERCISES = [
    { "id" : 0, "name" : "Bench Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 1, "name" : "Dumbell Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 2, "name" : "Dumbell Incline Press", "lang" : "en", "category" : "Chest", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 3, "name" : "Leg Press", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 4, "name" : "Barbell Squat", "lang" : "en", "category" : "Legs", "type" : "weights", "desc" : "", "logo" : ""},
    { "id" : 5, "name" : "Plank", "lang" : "en", "category" : "Abs", "type" : "time", "desc" : "", "logo" : ""},
    { "id" : 6, "name" : "Bycicle", "lang" : "en", "category" : "Cardio", "type" : "distance", "desc" : "", "logo" : ""}
];

const store = createStore({
  exercises: EXERCISES
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

