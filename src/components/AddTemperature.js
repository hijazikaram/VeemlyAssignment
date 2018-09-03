import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'

const styles = {
    addTemp: {
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

class AddTemperature extends Component {
   
    render() {
        const { machines, addMachineTemp, temperature, handleChange, tempId } = this.props
        
        return (
            <div style={styles.addTemp}>

                <h4>Add Temperature</h4>
                <div>
                    <FormControl required style={styles.formControl}>
                        <InputLabel htmlFor="temperature">Temperature</InputLabel>
                        <Select
                            value={tempId}
                            onChange={handleChange('tempId')}
                            style={styles.select}
                            inputProps={{
                                name: 'temperature'
                            }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {Object.keys(machines).map((id) => {
                                return(
                                    <MenuItem key={id} value={id}>{id}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>   
                    <TextField
                        id="temperature"
                        label="Temperature"
                        onChange={handleChange('temperature')}
                        margin="normal"
                        type="number"
                        style={styles.input}
                        value={temperature}
                        required
                    />
                    <Button onClick={addMachineTemp} variant="contained" color="primary">Add</Button>
                </div>
            </div>
        )
    }
}

AddTemperature.propTypes = {
    machines: PropTypes.object.isRequired,
    addMachineTemp: PropTypes.func.isRequired,
    temperature: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    tempId: PropTypes.string.isRequired
}
export default AddTemperature
