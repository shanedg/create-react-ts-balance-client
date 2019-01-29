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
 * Custom table row state.
 */
interface ICustomTableRowState {
  active: boolean;
}

/**
 * Custom table row component.
 */
class CustomTableRow extends Component<ICustomTableRowProps, ICustomTableRowState> {

  constructor(props: ICustomTableRowProps) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggleRowActive = this.toggleRowActive.bind(this);
  }

  public render() {
    const cols: IColumn[] = this.props.cols;
    const row: ITransaction = this.props.row;

    return (
      <TableRow>
        {
          cols.map((col: IColumn, i: number) => {
            return (
              <CustomTableCell
                active={this.state.active}
                col={col}
                key={`td-${i}`}
                onClick={this.toggleRowActive}
                value={row[col.name]}
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

}

export default CustomTableRow;
