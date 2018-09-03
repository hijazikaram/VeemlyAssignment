import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

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
    constructor(props) {
        super(props);
        // Add some default error states
        this.state = {
            error: false,
            info: null,
        };
    }
    
    componentDidCatch(error, info) {
        // Something happened to one of my children.
        // Add error to state
        this.setState({
            error: error,
            info: info,
        });
    }
    componentDidMount() {
        console.log("test")
    }
    render() {
        const { machines, handleChange, open, handleModalClose, createNewMachine, handleOpen } = this.props
        return (
            <div>
                <div>
                    <Button onClick={handleOpen} variant="contained" color="primary" id="addUser">Add User</Button>
                </div>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleModalClose}
                id="addModal"
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
                    <Button onClick={createNewMachine} variant="contained" color="primary" id="createUser">Create Machine</Button>
                </div>
                </Modal>
            </div>
        )
   
    }
}

CreateMachine.propTypes = {
    machines: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    createNewMachine: PropTypes.func.isRequired
}
export default CreateMachine
