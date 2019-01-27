// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  TableCell,
} from '@material-ui/core';

import CustomInput from './CustomInput';

/**
 * Custom table cell props.
 */
interface ICustomTableCellProps {
  // active: boolean;
  col: any;
  value: any;
}

/**
 * Custom table cell state.
 */
interface ICustomTableCellState {
  active: boolean;
}

/**
 * Custom table cell component.
 */
class CustomTableCell extends Component<ICustomTableCellProps, ICustomTableCellState> {

  constructor(props: ICustomTableCellProps) {
    super(props);

    this.state = {
      active: false,
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.toggleInputActive = this.toggleInputActive.bind(this);
  }

  public render() {
    const active = this.state.active;
    /**
     * [TODO] use `col` later for decisions about disabling, editing, validating
     */
    const col = this.props.col;
    const val = this.props.value;

    const inner = active ?
      <CustomInput
        input={val}
        label={''}
        onChange={this.handleChanges}
      ></CustomInput> :
      val;

    return (
      <TableCell
        onClick={this.toggleInputActive}
      >
        {inner}
      </TableCell>
    );
  }

  /**
   * Handle input changes.
   */
  private handleChanges(changes: any) {
    // tslint:disable-next-line no-console
    console.log('changes stub', changes);
  }

  /**
   * Toggle edit cell.
   */
  private toggleInputActive() {
    this.setState({
      active: !this.state.active,
    });
  }

}

export default CustomTableCell;
