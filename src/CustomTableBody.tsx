// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

import CustomTableRow from './CustomTableRow';

/**
 * Custom table body props.
 */
interface ICustomTableBodyProps {
  cols: IColumn[];
  onChange: any;
  transactions: ITransaction[];
}

/**
 * Custom table body component.
 */
class CustomTableBody extends Component<ICustomTableBodyProps, {}> {

  public render() {
    const cols: IColumn[] = this.props.cols;
    const handleChanges: any = this.props.onChange;
    const transactions: ITransaction[] = this.props.transactions;

    return (
      <TableBody>
        {
          transactions.map((row: ITransaction, i: number) => {
            return (
              <CustomTableRow
                cols={cols}
                onChange={handleChanges}
                key={`tr-${i}`}
                row={row}
              ></CustomTableRow>
            );
          })
        }
      </TableBody>
    );
  }

}

export default CustomTableBody;
