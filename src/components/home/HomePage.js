import React from 'react'
import { Jumbotron , Button } from 'react-bootstrap'

const HomePage = () => (
  <Jumbotron>
    <h1>Welcome to Gym Tracker</h1>
    <p>This is a simple app to log your gym workouts</p>
    <p><Button bsStyle="primary">Login to start!</Button></p>
  </Jumbotron>
)

export default HomePage;