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
  cols: IColumn[];
}

/**
 * Custom table head component.
 */
class CustomTableHead extends Component<ICustomTableHeadProps, {}> {

  public render() {
    const cols: IColumn[] = this.props.cols;

    return (
      <TableHead>
        <TableRow>
          {
            cols.map((col: IColumn, j: number) => {
              return (
                <TableCell key={`th-${j}`}>
                  {col.name}
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
