// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  Paper,
} from '@material-ui/core';

import CustomTable from './CustomTable';

import './App.scss';

/**
 * Table.
 */
interface ITable {
  cols: IColumn[];
  transactions: ITransaction[];
}

/**
 * App state.
 */
interface IAppState {
  transactions: ITransaction[];
  columns: IColumn[];
}

/**
 * Top-level App component.
 */
class App extends Component<{}, IAppState> {
  private transactions: ITransaction[] = [];

  constructor(props: any) {
    super(props);

    this.state = {
      columns: [
        {
          name: 'id',
          readOnly: true,
        },
        {
          name: 'name',
        },
        {
          name: 'amount',
        },
        {
          name: 'due',
        },
      ],
      transactions: [],
    };

    this.fetchChainReject = this.fetchChainReject.bind(this);
    this.transactionUpdates = this.transactionUpdates.bind(this);
  }

  public render() {
    const transactions: ITransaction[] = this.state.transactions;
    const columns: IColumn[] = this.state.columns;

    /**
     * [TODO] represent tables in state? should persist across sessions?
     */
    const tables: ITable[] = transactions.length > 5
      ? [
        {
          cols: columns,
          transactions: transactions.slice(0, 2),
        },
        {
          cols: columns,
          transactions: transactions.slice(2, 5),
        },
        {
          cols: columns,
          transactions: transactions.slice(5),
        },
      ]
      : [
        {
          transactions,
          // tslint:disable-next-line object-literal-sort-keys
          cols: columns,
        },
      ];

    return (
      <div className="App">
        <Paper
          elevation={4}
        >
          {
            tables &&
            tables.length > 0 &&
            tables.map((table: ITable, i: number) => {

              return (
                <CustomTable
                  cols={table.cols}
                  key={`table-${i}`}
                  onChange={this.transactionUpdates}
                  transactions={table.transactions}
                ></CustomTable>
              );
            })
          }
        </Paper>
      </div>
    );
  }

  public componentDidMount() {
    this.fetchTransactions();
  }

  /**
   * Get all transactions.
   */
  private fetchTransactions() {
    const baseURL: string = 'http://localhost';
    const port: string | null = '1337';
    const path: string | null = '/transactions/';
    /**
     * [TODO] `endpoint` construction is a little overwrought, should be extracted to some utility.
     */
    const endpoint = baseURL + (
      (port == null || port === '')
        ? ''
        : `:${port}`)
      + ((path == null || path === '')
        ? ''
        : `${path}`
      );

    fetch(endpoint)
      .then(
        (fetchResponse) => {
          if (!fetchResponse.ok) {
            this.transactionUpdates([]);
            return Promise.reject(fetchResponse);
          }
          return Promise.resolve(fetchResponse.json());
        },
        this.fetchChainReject
      )
      .then(
        (responseData) => {
          if (!responseData) {
            this.transactionUpdates([]);
            return Promise.reject(responseData);
          }
          return Promise.resolve(this.transactionUpdates(responseData));
        },
        this.fetchChainReject
      )
      .catch((reason) => {
        // tslint:disable-next-line no-console
        console.error('Problem getting transactions.', reason);
      });
  }

  /**
   * Fetch/response chain promise rejection handler.
   * @param promiseFailure Rejected fetch promise value.
   * DRY rejection handling in fetch promise chain.
   */
  private fetchChainReject(promiseFailure: any) {
    this.transactionUpdates([]);
    return Promise.reject(promiseFailure);
  }

  /**
   * Handle transaction init and update.
   * @param transactions New or updated transactions.
   */
  private transactionUpdates(transactions: ITransaction[]) {
    this.setState({
      transactions,
    });
  }

}

export default App;
