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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CustomInput
          label="name"
          onChange={this.handleNameChange}
          inputValue={this.state.name}
        ></CustomInput>
        <CustomInput
          label="description"
          onChange={this.handleDescriptionChange}
          inputValue={this.state.description}
        ></CustomInput>
        <CustomInput
          label="amount"
          onChange={this.handleAmountChange}
          inputValue={this.state.amount}
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
   * Handle form submission.
   * @param {any} event Form submit event.
   */
  private handleSubmit(event: any) {
    event.preventDefault();
  }
}

export default CustomForm;
