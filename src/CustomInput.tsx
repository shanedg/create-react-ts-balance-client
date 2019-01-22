import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// tslint:disable-next-line:import-name
import React, { Component } from 'react';

/**
 * CustomInput props.
 */
interface ICustomInputProps {
  label: string;
  onChange: any;
  input: any;
}

/**
 * CustomInput state.
 */
interface ICustomInputState {
  input: string;
}

class CustomInput extends Component<ICustomInputProps, ICustomInputState> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const label = this.props.label || '';

    return (
      <InputLabel>
        {label}:
        <Input
          onChange={this.props.onChange}
          value={this.props.input}
        ></Input>
      </InputLabel>
    );
  }

}

export default CustomInput;
