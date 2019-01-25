// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  TableCell,
} from '@material-ui/core';

/**
 * Custom table cell props.
 */
interface ICustomTableCellProps {
  col: any;
  value: any;
}

/**
 * Custom table cell component.
 */
class CustomTableCell extends Component<ICustomTableCellProps, {}> {

  public render() {
    const val = this.props.value;
    /**
     * [TODO] use `col` later for decisions about disabling, editing, validating
     */
    const col = this.props.col;

    return (
      <TableCell>
        {val}
      </TableCell>
    );
  }

}

export default CustomTableCell;
