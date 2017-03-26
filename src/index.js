import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import createStore from './redux/store'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { loadExercises } from './redux/actions/ExercisesActions'

const store = createStore();

store.dispatch(loadExercises());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

