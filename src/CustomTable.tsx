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
  onChange: any;
  next: number | null;
  prev: number | null;
  transactions: ITransaction[];
}

/**
 * Custom table component.
 */
class CustomTable extends Component<ICustomTableProps, {}> {

  constructor(props: ICustomTableProps) {
    super(props);

    // this.transactionChanges = this.transactionChanges.bind(this);
  }

  public render() {
    const cols: IColumn[] = this.props.cols;
    const transactions: ITransaction[] = this.props.transactions;

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
            onChange={this.props.onChange}
            transactions={transactions}
          ></CustomTableBody>
        </Table>
      </Paper>
    );
  }

  /**
   * asdf
   */
  // private transactionChanges(t: ITransaction) {
  //   const id = t.id;
  //   const newT: ITransaction;

  //   this.props.transactionsChanged();
  // }

}

export default CustomTable;
