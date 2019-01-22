// tslint:disable-next-line:import-name
import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CustomForm from './CustomForm';

import './App.scss';

/**
 * Top-level App component.
 */
class App extends Component {
  public render() {
    return (
      <div className="App">
        <Paper
          elevation={4}
        >
          <CustomForm></CustomForm>
        </Paper>
        <Paper
          elevation={4}
        >
          <Table>
            <TableHead>
            <TableRow>
                <TableCell>name</TableCell>
                <TableCell>description</TableCell>
                <TableCell>amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>a</TableCell>
                <TableCell>b</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default App;
