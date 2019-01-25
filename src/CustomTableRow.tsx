// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  TableRow,
} from '@material-ui/core';

import CustomTableCell from './CustomTableCell';

/**
 * Custom table row props.
 */
interface ICustomTableRowProps {
  cols: IColumn[];
  row: ITransaction;
}

/**
 * Custom table row component.
 */
class CustomTableRow extends Component<ICustomTableRowProps, {}> {

  public render() {
    const cols: IColumn[] = this.props.cols;
    const row: ITransaction = this.props.row;

    return (
      <TableRow>
        {
          cols.map((col: IColumn, i: number) => {
            return (
              <CustomTableCell
                col={col}
                key={`td-${i}`}
                value={row[col.name]}
              ></CustomTableCell>
            );
          })
        }
      </TableRow>
    );
  }

}

export default CustomTableRow;
