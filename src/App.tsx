// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import {
  Paper,
} from '@material-ui/core';

import CustomTable from './CustomTable';

import './App.scss';

/**
 * Table, linked list probably.
 */
interface ITable {
  cols: IColumn[];
  next: number | null;
  prev: number | null;
  transactions: ITransaction[];

  /**
   * [TODO]: this is an entirely new class
   */
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

    this.transactionsChanged = this.transactionsChanged.bind(this);
  }

  public render() {
    const transactions: ITransaction[] = this.state.transactions;
    const columns: IColumn[] = this.state.columns;

    /**
     * [TODO] represent tables in state? should persist across sessions?
     */
    const tables: any[] = [
      {
        cols: columns,
        next: 1,
        prev: null,
        transactions: transactions.slice(0, 2),
      },
      {
        cols: columns,
        next: null,
        prev: 0,
        transactions: transactions.slice(2, 5),
      },
      {
        cols: columns,
        next: null,
        prev: 0,
        transactions: transactions.slice(5, 9),
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
              const next = (i < tables.length - 1) ? (i + 1) : null;
              const prev = (i > 0) ? (i - 1) : null;

              return (
                <CustomTable
                  cols={table.cols}
                  key={`table-${i}`}
                  onChange={this.transactionsChanged}
                  next={next}
                  prev={prev}
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
    /**
     * [TODO]: fetch stuff here, fake data for now
     */
    // tslint:disable-next-line
    const result:any = [
      {
        // tslint:disable-next-line
      "id":5,"name":null,"amount":null,"details":null,"due":null,"scheduled":"2018-12-22T05:00:00.000Z","effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-12T04:58:38.232Z","updated_at":"2018-12-12T04:58:38.251Z"},{"id":7,"name":null,"amount":2048,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-13T04:35:54.147Z","updated_at":"2018-12-16T19:39:14.178Z"},{"id":4,"name":null,"amount":2048,"details":null,"due":"2018-12-12T05:00:00.000Z","scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-12T04:58:33.869Z","updated_at":"2018-12-16T19:39:17.608Z"},{"id":9,"name":null,"amount":2048,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-16T06:50:48.864Z","updated_at":"2018-12-16T19:39:19.979Z"},{"id":8,"name":"xxx","amount":2048,"details":"</3","due":"2019-04-20T04:00:00.000Z","scheduled":"2019-04-20T04:00:00.000Z","effective":"2019-04-20T04:00:00.000Z","fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-15T05:54:30.461Z","updated_at":"2018-12-16T19:41:30.278Z"},{"id":1,"name":null,"amount":2048,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-12T04:58:10.733Z","updated_at":"2018-12-16T19:42:09.085Z"},{"id":10,"name":null,"amount":null,"details":"aSD...updated!","due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-16T06:50:57.225Z","updated_at":"2018-12-16T19:47:42.531Z"},{"id":2,"name":null,"amount":99,"details":"null...updated!","due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-12T04:58:19.226Z","updated_at":"2018-12-16T20:22:22.016Z"},{"id":3,"name":null,"amount":null,"details":"wut...updated!","due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-12T04:58:29.820Z","updated_at":"2018-12-16T20:24:08.294Z"},{"id":11,"name":null,"amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-17T03:25:47.393Z","updated_at":"2018-12-17T03:25:47.408Z"},{"id":12,"name":null,"amount":5,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-17T03:25:53.839Z","updated_at":"2018-12-17T03:25:53.852Z"},{"id":13,"name":null,"amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-17T03:30:21.476Z","updated_at":"2018-12-17T03:30:21.491Z"},{"id":14,"name":null,"amount":null,"details":"heck 'em","due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-17T03:46:14.511Z","updated_at":"2018-12-17T03:46:14.524Z"},{"id":15,"name":"fux wit it","amount":999,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2018-12-17T06:48:33.439Z","updated_at":"2018-12-17T06:48:33.459Z"},{"id":16,"name":"we're back","amount":null,"details":"baybay","due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:12:35.324Z","updated_at":"2019-01-12T04:12:35.413Z"},{"id":17,"name":null,"amount":null,"details":null,"due":"2019-04-20T04:00:00.000Z","scheduled":"2019-04-20T04:00:00.000Z","effective":"2019-04-20T04:00:00.000Z","fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:15:24.917Z","updated_at":"2019-01-12T04:15:24.933Z"},{"id":18,"name":null,"amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:24:33.852Z","updated_at":"2019-01-12T04:24:33.852Z"},{"id":19,"name":"baby boi","amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:27:30.502Z","updated_at":"2019-01-12T04:27:30.523Z"},{"id":20,"name":null,"amount":null,"details":"tester","due":"2019-01-15T05:00:00.000Z","scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:27:41.819Z","updated_at":"2019-01-12T04:27:41.840Z"},{"id":21,"name":null,"amount":null,"details":"buckets then?","due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:27:50.859Z","updated_at":"2019-01-12T04:27:50.859Z"},{"id":22,"name":null,"amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:31:47.940Z","updated_at":"2019-01-12T04:31:47.940Z"},{"id":23,"name":null,"amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:36:53.148Z","updated_at":"2019-01-12T04:36:53.148Z"},{"id":24,"name":null,"amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:42:35.653Z","updated_at":"2019-01-12T04:42:35.669Z"},{"id":25,"name":null,"amount":null,"details":null,"due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-12T04:42:40.821Z","updated_at":"2019-01-12T04:42:40.821Z"},{"id":26,"name":"fixeD","amount":null,"details":"think we got it","due":null,"scheduled":null,"effective":null,"fromAccount":{"id":1,"name":"chrome-checking","details":"chrome checking account","type":null,"initialBalance":1100,"created_at":"2018-12-16T06:47:30.747Z","updated_at":"2018-12-16T06:47:30.760Z"},"toAccount":{"id":2,"name":"chrome-savings","details":"savings account @ chrome","type":null,"initialBalance":4500,"created_at":"2019-01-12T04:36:31.189Z","updated_at":"2019-01-12T04:36:31.243Z"},"bucket":{"id":3,"name":"ah fuck it, right?","created_at":"2018-12-16T06:46:51.889Z","updated_at":"2018-12-16T06:46:51.899Z"},"created_at":"2019-01-12T04:43:27.998Z","updated_at":"2019-01-12T04:43:28.048Z"},{"id":27,"name":"do","amount":100,"details":"dollars sound like a lot","due":null,"scheduled":null,"effective":null,"fromAccount":null,"toAccount":null,"bucket":null,"created_at":"2019-01-14T07:16:05.369Z","updated_at":"2019-01-14T07:16:05.439Z"
      },
    ];

    const transactionDefaults: ITransaction = {
      amount: 0,
      bucket: '',
      created_at: '',
      details: '',
      due: '',
      effective: '',
      fromAccount: '',
      id: (-99),
      name: '',
      scheduled: '',
      toAccount: '',
      updated_at: '',
    };

    /**
     * [TODO]: this nested looping for patching defaults is no good
     */
    const transactions = result.map((before: ITransaction) => {
      const after = Object.assign({}, transactionDefaults);
      for (const prop in before) {
        if (before[prop] != null) {
          after[prop] = before[prop];
        }
      }
      return after;
    });

    this.setState({
      transactions,
    });
  }

  /**
   * Handle transactions changes.
   */
  private transactionsChanged(transactionsChanged: ITransaction[]) {
    this.setState({
      transactions: transactionsChanged,
    });
  }
}

export default App;
