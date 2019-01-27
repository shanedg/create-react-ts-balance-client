import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// tslint:disable-next-line:import-name
import React, { Component } from 'react';

/**
 * CustomInput props.
 */
interface ICustomInputProps {
  input: any;
  label: string;
  onChange: any;
}

/**
 * CustomInput state.
 */
interface ICustomInputState {
  input: string;
}

/**
 * Custom input componenet.
 */
class CustomInput extends Component<ICustomInputProps, ICustomInputState> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const label = this.props.label || '';

    return (
      <InputLabel>
        <span>
          {label}
        </span>
        <Input
          onChange={this.props.onChange}
          value={this.props.input}
        ></Input>
      </InputLabel>
    );
  }

}

export default CustomInput;
