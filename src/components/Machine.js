import React, { Component } from 'react'
import config from 'config/index'
import Table from 'components/Table'
import AddUnits from 'components/AddUnits'
import AddTemp from 'components/AddTemperature'
import CreateMachine from 'components/CreateMachine'

class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      unitsId: '',
      tempId: '',
      newId: '',
      name: '',
      errMsg: '',
      machines: config.machines,
      units: '',
      temperature: '',
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  addUnits = () => {
    const {unitsId, machines, units} = this.state
    const unitNum = parseInt(units, 10)
    machines[unitsId].numAdded += 1
    machines[unitsId].units = unitNum + machines[unitsId].units
    machines[unitsId].average = machines[unitsId].units / machines[unitsId].numAdded
    
    this.setState({
      machines: machines,
      units: '',
      unitsId: ''
    })
  }

  addMachineTemp = () => {
    const {tempId, machines, temperature} = this.state
    const temperatureNum = parseInt(temperature, 10)
    machines[tempId].temperature = temperatureNum
    
    this.setState({
      machines: machines,
      temperature: '',
      tempId: ''
    })
  }


  handleClose = () => {
    this.setState({
      open: false,
      name: '',
      newId: '',
      errMsg: ''
    });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  submit = () => {
    const {machines, name, newId} = this.state
    machines[newId] = {
      name: name,
      id: newId,
      temperature: 0,
      units: 0,
      average: 0,
      numAdded: 0
    }
    this.setState({
      machines: machines
    })
    this.handleClose()
  }

  render() {
    return (
      <div>
        <h1>Veemly Assignment</h1>
        <CreateMachine machines={this.state.machines} handleChange={this.handleChange} open={this.state.open} handleModalClose={this.handleClose} createNewMachine={this.submit} handleOpen={this.handleOpen} />
        <Table machines={this.state.machines} />

        <AddUnits machines={this.state.machines} addUnits={this.addUnits} units={this.state.units} unitsId={this.state.unitsId} handleChange={this.handleChange} />
        <AddTemp machines={this.state.machines} addMachineTemp={this.addMachineTemp} temperature={this.state.temperature} tempId={this.state.tempId} handleChange={this.handleChange} />

      </div>
    );
  }
}


export default Machine;
