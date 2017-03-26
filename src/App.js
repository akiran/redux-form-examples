import React, { Component } from 'react';
import SimpleForm from './components/forms/SimpleForm';
import AutoCompleteForm from './components/forms/AutoCompleteForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <SimpleForm />
        <AutoCompleteForm />
      </div>
    );
  }
}

export default App;
