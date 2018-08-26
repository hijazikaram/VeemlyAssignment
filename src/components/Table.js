import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    marginTop: 10,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  }
}
class MachineTable extends Component {

  render() {
    const { machines } = this.props;
    return (
        <div>
          <Paper style={styles.root}>
            <Table style={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell numeric>ID</TableCell>
                  <TableCell numeric>temperature</TableCell>
                  <TableCell numeric>Units</TableCell>
                  <TableCell numeric>Average</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {Object.keys(machines).map((id) => {
                  return(
                    <TableRow key={id}>
                      <TableCell component="th" scope="row">
                      {machines[id].name}
                      </TableCell>
                      <TableCell numeric>{id}</TableCell>
                      <TableCell numeric>{machines[id].temperature}</TableCell>
                      <TableCell numeric>{machines[id].units}</TableCell>
                      <TableCell numeric>{machines[id].average}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
        
    );
  }
}


export default MachineTable;
