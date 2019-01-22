// tslint:disable:max-classes-per-file

// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import CustomInput from './CustomInput';

import './App.scss';

/**
 * Top-level App component.
 */
class App extends Component {
  public render() {
    return (
      <div className="App">
        <CustomForm></CustomForm>
      </div>
    );
  }
}

interface ICustomFormState {
  input: any;
}

class CustomForm extends Component<{}, ICustomFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CustomInput
          label="asdf"
          onChange={this.handleChange}
          input={this.state.input}
        ></CustomInput>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }

  /**
   * Update state based on change to input.
   * @param {any} event Input change event.
   */
  private handleChange(event: any) {
    this.setState({
      input: event.target.value,
    });
  }

  /**
   * Handle form submission.
   * @param {any} event Form submit event.
   */
  private handleSubmit(event: any) {
    event.preventDefault();
  }
}

export default App;
