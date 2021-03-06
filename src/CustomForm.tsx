import Button from '@material-ui/core/Button';
// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import CustomInput from './CustomInput';

interface ICustomFormState {
  amount: number | '';
  description: string;
  name: string;
}

class CustomForm extends Component<{}, ICustomFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      amount: '',
      description: '',
      name: '',
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CustomInput
          label="name"
          inputValue={this.state.name}
          onChange={this.handleNameChange}
          onFocus={this.handleFocus}
        ></CustomInput>
        <CustomInput
          label="description"
          inputValue={this.state.description}
          onChange={this.handleDescriptionChange}
          onFocus={this.handleFocus}
        ></CustomInput>
        <CustomInput
          label="amount"
          inputValue={this.state.amount}
          onChange={this.handleAmountChange}
          onFocus={this.handleFocus}
        ></CustomInput>
        <Button
          onSubmit={this.handleSubmit}
          variant="contained"
        >Submit</Button>
      </form>
    );
  }

  /**
   * Update state based on change to input.
   * @param {any} event Input change event.
   */
  private handleNameChange(event: any) {
    this.setState({
      name: event.target.value,
    });
  }

  /**
   * Update state based on change to input.
   * @param {any} event Input change event.
   */
  private handleDescriptionChange(event: any) {
    this.setState({
      description: event.target.value,
    });
  }

  /**
   * Update state based on change to input.
   * @param {any} event Input change event.
   */
  private handleAmountChange(event: any) {
    this.setState({
      amount: event.target.value,
    });
  }

  /**
   * Handle input focus.
   * @param event Emulated focus event on input.
   */
  private handleFocus(event: any) {
    // tslint:disable-next-line no-console
    console.warn('focus', event.target);
  }

  /**
   * Handle form submission.
   * @param {any} event Form submit event.
   */
  private handleSubmit(event: any) {
    event.preventDefault();
  }
}

export default CustomForm;
