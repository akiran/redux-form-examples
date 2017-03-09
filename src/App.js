import React, { Component } from 'react';
import SimpleForm from './components/forms/SimpleForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <SimpleForm />
      </div>
    );
  }
}

export default App;
