import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const styles = {
    addUnits: {
        marginTop: 20
    },
    select: {
        marginLeft: 0,
        marginRight: 10
    },
    input: {
        width: '20%',
        marginRight: 10,
        marginTop: 0,
        marginBotton: 0
    },
    formControl: {
        minWidth: '20%',
    }
}

class AddUnits extends Component {

  render() {
    const { machines, addUnits, units, handleChange, unitsId } = this.props;
    return (
        <div style={styles.addUnits}>
            <h4>Add Units</h4>
            <div>
                <FormControl required style={styles.formControl}>
                    <InputLabel htmlFor="units">Units</InputLabel>
                    <Select
                    value={unitsId}
                    onChange={handleChange('unitsId')}
                    style={styles.select}
                    inputProps={{
                        name: 'units'
                    }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {Object.keys(machines).map((id) => {
                            return(
                            <MenuItem value={id} key={id}>{id}</MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>    
                <TextField
                    id="units"
                    label="Units"
                    onChange={handleChange('units')}
                    style={styles.input}
                    margin="normal"
                    type="number"
                    value={units}
                    required
                />
                <Button onClick={addUnits} variant="contained" color="primary">Add</Button>
            </div>
        </div>
    );
  }
}


export default AddUnits;
