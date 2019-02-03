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
 * Custom table body state.
 */
interface ICustomTableBodyState {
  focus: any;
}

/**
 * Generic boolean flag dictionary, used here to track row focused state.
 */
interface IFlag {
  [index: string]: boolean;
}

/**
 * Custom table body component.
 */
class CustomTableBody extends Component<ICustomTableBodyProps, ICustomTableBodyState> {

  constructor(props: ICustomTableBodyProps) {
    super(props);

    this.state = {
      focus: {},
    };
  }

  public render() {
    const cols: IColumn[] = this.props.cols;
    const handleChanges: any = this.props.onChange;
    const transactions: ITransaction[] = this.props.transactions;

    return (
      <TableBody>
        {
          transactions.map((row: ITransaction, i: number) => {
            /**
             * Pass row key to factory to get per-row focus handler.
             */
            const rowKey = `tr-${i}`;

            const handleRowFocus = this.focusHandlerFactory(rowKey);
            const focused = this.state.focus.hasOwnProperty(rowKey)
              ? this.state.focus[rowKey]
              : false;

            return (
              <CustomTableRow
                cols={cols}
                focused={focused}
                key={rowKey}
                onChange={handleChanges}
                onFocus={handleRowFocus}
                row={row}
              ></CustomTableRow>
            );
          })
        }
      </TableBody>
    );
  }

  /**
   * Table body row focus handler factory.
   * @param {string} keyProp Key to the specific table body row.
   * @returns {any} Focus event handler function for individual table row.
   */
  private focusHandlerFactory(keyProp: string) {

    return (event: any) => {
      const focusToPatch: IFlag = {};
      focusToPatch[keyProp] = true;

      /**
       * The following ternary operation allows us to handle the initial case and dynamically
       * construct the focus-tracking structure based on keys we've seen.
       */
      const patchedFocusState: IFlag = Object.keys(this.state.focus).length > 0
        /**
         * Prior state is not empty: filter the focused key out of the prior state.
         */
        ? Object.keys(this.state.focus)
          .filter((key) => {
            return (key !== keyProp);
          })
          /**
           * Then reduce the remaining keys onto a new object, values intialized to `false`.
           * Accumulator is initialized to an object with the new focused key, value `true`.
           */
          .reduce(
            (obj, key) => {
              obj[key] = false;
              const reduced = Object.assign(obj, focusToPatch);
              return reduced;
            },
            focusToPatch
          )
        /**
         * Prior state is empty: new state is just the object conaining new focused key.
         */
        : focusToPatch;

      this.setState({
        focus: patchedFocusState,
      });

    };
  }

}

export default CustomTableBody;
