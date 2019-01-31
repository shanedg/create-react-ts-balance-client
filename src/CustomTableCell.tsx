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
  cellValue: any;
  col: any;
  onChange: any;
  onClick: any;
  onFocus: any;
}

/**
 * Custom table cell component.
 */
class CustomTableCell extends Component<ICustomTableCellProps, {}> {

  constructor(props: ICustomTableCellProps) {
    super(props);
  }

  public render() {
    const active = this.props.active;
    /**
     * [TODO] use `col` later for decisions about disabling, editing, validating
     */
    // const col = this.props.col;
    const cellValue = this.props.cellValue;

    const inner = active ?
      <CustomInput
        inputValue={cellValue}
        label={''}
        onChange={this.props.onChange}
        onFocus={this.props.onFocus}
      ></CustomInput> :
      cellValue;

    return (
      <TableCell
        onClick={this.props.onClick}
      >
        {inner}
      </TableCell>
    );
  }

}

export default CustomTableCell;
