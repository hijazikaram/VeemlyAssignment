import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = {
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: "#fff",
        padding: 32,
        top: '40%',
        left: '55%',
        transform: 'translate(-59%, -58%)'
    }
}

class CreateMachine extends Component {
 
  render() {
    const { machines, handleChange, open, handleModalClose, createNewMachine, handleOpen } = this.props;
    return (
        <div>
            <div>
                <Button onClick={handleOpen} variant="contained" color="primary">Add User</Button>
            </div>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleModalClose}
            >
            <div style={styles.paper} >
                <div>
                <TextField
                    id="name"
                    label="Name"
                    onChange={handleChange('name')}
                    margin="normal"
                    required
                />
                <TextField
                    id="newId"
                    label="ID"
                    onChange={handleChange('newId')}
                    margin="normal"
                    required
                />
                </div>
                <Button onClick={createNewMachine} variant="contained" color="primary">Create Machine</Button>
            </div>
            </Modal>
        </div>
    );
  }
}


export default CreateMachine;
