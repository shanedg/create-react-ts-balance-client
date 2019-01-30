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
  onChange: any;
  row: ITransaction;
}

/**
 * Custom table row state.
 */
interface ICustomTableRowState {
  active: boolean;
  rowData: ITransaction;
}

/**
 * Custom table row component.
 */
class CustomTableRow extends Component<ICustomTableRowProps, ICustomTableRowState> {

  constructor(props: ICustomTableRowProps) {
    super(props);

    this.state = {
      active: false,
      rowData: this.props.row,
    };

    this.toggleRowActive = this.toggleRowActive.bind(this);
  }

  public render() {
    const active: boolean = this.state.active;
    const cols: IColumn[] = this.props.cols;
    const row: ITransaction = this.props.row;

    return (
      <TableRow>
        {
          cols.map((col: IColumn, i: number) => {
            /**
             * Per-cell input handler from factory.
             */
            const handler = this.inputHandlerFactory(col.name);
            return (
              <CustomTableCell
                active={active}
                cellValue={row[col.name]}
                col={col}
                key={`td-${i}`}
                onChange={handler}
                onClick={this.toggleRowActive}
              ></CustomTableCell>
            );
          })
        }
      </TableRow>
    );
  }

  /**
   * Enter edit row cells.
   */
  private toggleRowActive() {
    this.setState({
      active: true,
    });
  }

  /**
   * Row input handler factory.
   * @param {string} rowProp Column name prop passed to custom table cell.
   * @returns {any} Input change handler function for individual cell in row.
   */
  private inputHandlerFactory(rowProp: string) {
    const column = rowProp;

    return (event: any) => {
      const row = this.state.rowData;
      row[rowProp] = event.target.value;

      this.setState({
        rowData: row,
      });
    };
  }

  /**
   * Save current row state.
   */
  private saveRowEdits() {
    this.disableRow();
    // emit row state?
  }

  /**
   * Discard current row state.
   */
  private cancelRowEdits() {
    this.disableRow();
    // grab original "default" row prop, reset state
  }

  /**
   * Make row inputs inactive for editing.
   */
  private disableRow() {
    this.setState({
      active: false,
    });
  }

}

export default CustomTableRow;
