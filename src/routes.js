import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomePage from './components/home/HomePage'
import ReadOnlyExercisesTable from './components/exercises/ReadOnlyExercisesTable'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/exercises" component={ReadOnlyExercisesTable} />
    </Route>
)