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
      <label>
        {label}:
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.onChange}
        />
      </label>
    );
  }

}

export default CustomInput;
