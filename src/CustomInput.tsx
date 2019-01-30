import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// tslint:disable-next-line:import-name
import React, { Component } from 'react';

/**
 * CustomInput props.
 */
interface ICustomInputProps {
  inputValue: any;
  label: string;
  onChange: any;
}

/**
 * Custom input component.
 */
class CustomInput extends Component<ICustomInputProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const label = this.props.label || '';

    return (
      <InputLabel>
        {
          !(label === '') &&
          <span>
            {label}
          </span>
        }
        <Input
          onChange={this.props.onChange}
          value={this.props.inputValue}
        ></Input>
      </InputLabel>
    );
  }

}

export default CustomInput;
