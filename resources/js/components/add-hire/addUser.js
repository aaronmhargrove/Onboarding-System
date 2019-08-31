import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import './addUser.css';

class AddUser extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        accountType: '',
        username: '',
        tempPass: '',
    };

    onFirstNameEnter = (event) => {
        this.setState({firstName: event.target.value});
    }

    onLastNameEnter = (event) => {
        this.setState({lastName: event.target.value});
    }

    onEmailEnter = (event) => {
        this.setState({email: event.target.value});
    }

    onAccountTypeSelect = (event) => {
        this.setState({accountType: event.target.value});
    }

    onUsernameEnter = (event) => {
        this.setState({username: event.target.value});
    }

    onTempPassEnter = (event) => {
        this.setState({tempPass: event.target.value});
    }

    onSubmitClick = (event) => {
        console.log('Submit Clicked');
    }

    render() {
        return(
            <div className="contentContainer">
                <Grid container space={40} className="gridContainer2"> 
                    <Grid item xs={12} className="gridItem">
                        <TextField label="Last Name" value={this.state.lastName} onChange={this.onLastNameEnter} required/>
                    </Grid>
                    <Grid item xs={12} className="gridItem">
                        <TextField label="First Name" value={this.state.firstName} onChange={this.onFirstNameEnter} required/>
                    </Grid>
                    <Grid item xs={12} className="gridItem">
                        <TextField label="Email" value={this.state.email} onChange={this.onEmailEnter} required/>
                    </Grid>
                    <Grid item xs={12} className="gridItem">
                        <FormControl component="fieldset">
                        <FormLabel component="legend">Account Type</FormLabel>
                        <RadioGroup
                            aria-label="Account Type"
                            name="accountType"
                            value={this.state.accountType}
                            onChange={this.onAccountTypeSelect}
                        >
                            <FormControlLabel value="manager" control={<Radio />} label="Manager" />
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className="gridItem">
                        <TextField label="Username" value={this.state.username} onChange={this.onUsernameEnter} required/>
                    </Grid>
                    <Grid item xs={12} className="gridItem">
                        <TextField label="Temp. Password" value={this.state.tempPass} onChange={this.onTempPassEnter} required/>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.onSubmitClick} className="submitButton">
                    Submit
                </Button>
            </div>
        );
    }
}

export default AddUser;