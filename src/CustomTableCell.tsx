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
  active: boolean;
  col: any;
  onClick: any;
  value: any;
}

/**
 * Custom table cell state.
 */
interface ICustomTableCellState {
}

/**
 * Custom table cell component.
 */
class CustomTableCell extends Component<ICustomTableCellProps, ICustomTableCellState> {

  constructor(props: ICustomTableCellProps) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
  }

  public render() {
    const active = this.props.active;
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
        onClick={this.props.onClick}
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

}

export default CustomTableCell;
