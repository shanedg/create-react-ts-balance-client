// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

/**
 * Custom table head props.
 */
interface ICustomTableHeadProps {
  columns: IColumn[];
}

/**
 * Custom table head component.
 */
class CustomTableHead extends Component<ICustomTableHeadProps, {}> {

  public render() {
    const cols: IColumn[] = this.props.columns;

    return (
      <TableHead>
        <TableRow>
          {
            cols.map((column: IColumn, j: number) => {
              return (
                <TableCell key={`th-${j}`}>
                  {column.name}
                </TableCell>
              );
            })
          }
        </TableRow>
      </TableHead>
    );
  }

}

export default CustomTableHead;
