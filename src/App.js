import React, { Component, PropTypes } from 'react'
import Header from './components/common/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {  
  children: PropTypes.object.isRequired
};

export default App;