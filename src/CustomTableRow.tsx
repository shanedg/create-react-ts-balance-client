// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import TableRow from '@material-ui/core/TableRow';

import CustomTableCell from './CustomTableCell';

/**
 * 'Return' key code.
 */
const KEY_RETURN = 13;

/**
 * 'Esc' key code.
 */
const KEY_ESCAPE = 27;

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

    this.keyDown = this.keyDown.bind(this);
    this.toggleRowActive = this.toggleRowActive.bind(this);
  }

  public render() {
    const active: boolean = this.state.active;
    const cols: IColumn[] = this.props.cols;
    const row: ITransaction = this.state.rowData;

    return (
      /**
       * [TODO] element ref to listen for `focusIn` event bubbling up from children?
       * TURNS OUT: TableRow is a functional component so it cannot receive refs!
       */
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

  public componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
  }

  /**
   * Row input handler factory.
   * @param {string} rowProp Column name prop passed to custom table cell.
   * @returns {any} Input change handler function for individual cell in row.
   */
  private inputHandlerFactory(rowProp: string) {
    const column = rowProp;

    return (event: any) => {
      /**
       * Do not modify state directly.
       */
      const row = Object.assign({}, this.state.rowData);
      row[rowProp] = event.target.value;

      this.setState({
        rowData: row,
      });
    };
  }

  /**
   * Discard current row state.
   */
  private cancelRowEdits() {
    /**
     * Reset state to init props from parent.
     */
    this.setState({
      active: false,
      rowData: this.props.row,
    });
  }

  /**
   * Listen for keyboard events when a row cell is focused.
   * @param {KeyboardEvent} key Keyboard key down event.
   * [TODO] how to keep track of focus?
   */
  private keyDown(key: any) {
    const keyCode = key.which;

    switch (keyCode) {
      case KEY_RETURN:
        this.saveRowEdits();
        break;
      case KEY_ESCAPE:
        this.cancelRowEdits();
        break;
      default:
        break;
    }
  }

  /**
   * Save current row state.
   */
  private saveRowEdits() {
    this.setState({
      active: false,
    });

    // emit row state?
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
