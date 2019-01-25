// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  Paper,
  Table,
} from '@material-ui/core';

import CustomTableBody from './CustomTableBody';
import CustomTableHead from './CustomTableHead';

/**
 * Custom table props.
 */
interface ICustomTableProps {
  cols: IColumn[];
  next: number | null;
  prev: number | null;
  transactions: ITransaction[];
}

/**
 * Custom table component.
 */
class CustomTable extends Component<ICustomTableProps, {}> {

  public render() {
    const transactions: ITransaction[] = this.props.transactions;
    const cols: IColumn[] = this.props.cols;

    return (
      <Paper elevation={4}>
        <Table>
          {
            this.props.prev == null &&
            <CustomTableHead
              cols={cols}
            ></CustomTableHead>
          }
          <CustomTableBody
            cols={cols}
            transactions={transactions}
          ></CustomTableBody>
        </Table>
      </Paper>
    );
  }

}

export default CustomTable;
