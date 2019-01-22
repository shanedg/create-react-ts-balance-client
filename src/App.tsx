import Paper from '@material-ui/core/Paper';
// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import CustomForm from './CustomForm';

import './App.scss';

/**
 * Top-level App component.
 */
class App extends Component {
  public render() {
    return (
      <div className="App">
        <Paper
          elevation={4}
        >
          <CustomForm></CustomForm>
        </Paper>
      </div>
    );
  }
}

export default App;
