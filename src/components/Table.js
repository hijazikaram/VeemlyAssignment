import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'

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
    const { machines } = this.props
    if (Object.keys(machines).length == 0) {
        return <h1>No Machines, Please add a machine!</h1>
    } else{
      return (
      
        <div>
          <Paper style={styles.root}>
            <Table style={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Temperature</TableCell>
                  <TableCell>Units</TableCell>
                  <TableCell>Average</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {Object.keys(machines).map((id) => {
                  return(
                    <TableRow key={id}>
                      <TableCell>
                      {machines[id].name}
                      </TableCell>
                      <TableCell>{id}</TableCell>
                      <TableCell>{machines[id].temperature}</TableCell>
                      <TableCell>{machines[id].units}</TableCell>
                      <TableCell>{machines[id].average}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
        
      )
    }
  }
}

MachineTable.propTypes = {
  machines: PropTypes.object.isRequired,
}

export default MachineTable
