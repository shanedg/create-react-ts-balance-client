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
            // logic for passing onChange a change handler that knows what it's updating?
            const handler = this.makeInputHandler(col.name);
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
  private makeInputHandler(rowProp: string) {
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
   * [TODO] handler for input return key submission of row
   */

  /**
   * [TODO] handler for input esc key for cancel edit row
   */

}

export default CustomTableRow;
