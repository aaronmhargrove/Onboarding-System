import React from 'react';
import DatePickers from '../global/datePicker';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './addHire.css';

class AddHire extends React.Component {
    state = {
        lastName: '',
        firstName: '',
        hireDate: '',
        regionalLocation: '',
        gender: '',
        hireType: '',
        pdStartDate: '',
        role: '',
        teamName: '',
        platform: '',
        manager: '',
        hireStatus: '',
        computerNeeds: '',
        onboardingCampus: '',
        onboardingBuddy: '',
        adminName: '',
        cwid: '',
        vendor: '',
        plic: '',
        seatNum: '',
        neid: '',
        newHireRehireTicket: '',
        macTicket: '',
    };

    onLastNameEnter = (event) => { 
        this.setState({lastName: event.target.value});
    }

    onFirstNameEnter = (event) => {
        this.setState({firstName: event.target.value});
    }

    onDateHiredPick = (event) => {}

    onRegionalLocationEnter = (event) => {
        this.setState({regionalLocation: event.target.value});
    }

    onGenderSelect = (event) => {
        this.setState({gender: event.target.value});
    }

    onHireTypeSelect = (event) => {
        this.setState({hireType: event.target.value});
    }

    onPdStartDatePick = (event) => {}

    onRoleEnter = (event) => {
        this.setState({role: event.target.value});
    }

    onTeamNameEnter = (event) => {
        this.setState({teamName: event.target.value});
    }

    onPlatformEnter = (event) => {
        this.setState({platform: event.target.value});
    }

    onManagerEnter = (event) => {
        this.setState({manager: event.target.value});
    }

    onHireStatusSelect = (event) => {
        this.setState({hireStatus: event.target.value});
    }

    onComputerNeedsSelect = (event) => {
        this.setState({computerNeeds: event.target.value});
    }

    onOnboardingCampusEnter = (event) => {
        this.setState({onboardingCampus: event.target.value});
    }

    onOnboardingBuddyEnter = (event) => {
        this.setState({onboardingBuddy: event.target.value});
    }

    onAdminEnter = (event) => {
        this.setState({adminName: event.target.value});
    }

    onCWIDEnter = (event) => {
        this.setState({cwid: event.target.value});
    }

    onVendorEnter = (event) => {
        this.setState({vendor: event.target.value});
    }

    onPLICSelect = (event) => {
        this.setState({plic: event.target.value});
    }

    onSeatNumberEnter = (event) => {
        this.setState({seatNum: event.target.value});
    }

    onNEIDEnter = (event) => {
        this.setState({neid: event.target.value});
    }

    onNewHireRehireTicketEnter = (event) => {
        this.setState({newHireRehireTicket: event.target.value});
    }

    onMacTicketEnter = (event) => {
        this.setState({macTicket: event.target.value});
    }

    onSubmitClick = (event) => {console.log('Submit')}

    render() {
        return(
            <div className="contentContainer">
                <Grid container space={40} className="gridContainer">
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Last Name" value={this.state.lastName} onChange={this.onLastNameEnter} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="First Name" value={this.state.firstName} onChange={this.onFirstNameEnter} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <DatePickers label="Today's Date" required={true} onChange={this.onDateHiredPick} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Regional Location" value={this.state.regionalLocation} onChange={this.onRegionalLocationEnter} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <FormControl>
                            <InputLabel htmlFor="gender-selector" required>Gender</InputLabel>
                            <Select 
                            value={this.state.gender} 
                            onChange={this.onGenderSelect} 
                            input={<Input id="gender-selector" />}
                            required
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <FormControl>
                            <InputLabel htmlFor="hireType-selector" required>Hire Type</InputLabel>
                            <Select
                            value={this.state.hireType}
                            onChange={this.onHireTypeSelect}
                            input={<Input id="hireType-selector" />}
                            required
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="direct">Direct</MenuItem>
                                <MenuItem value="contract">Contract</MenuItem>
                                <MenuItem value="sow">SOW</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid> 
                    <Grid item xs={6} className="gridItem">
                        <DatePickers label="PD Start Date" required={true}></DatePickers>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Role" value={this.state.role} onChange={this.onRoleEnter} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Team Name" value={this.state.teamName} onChange={this.onTeamNameEnter} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Platform" value={this.state.platform} onChange={this.onPlatformEnter} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Manager" value={this.state.manager} onChange={this.onManagerEnter} required/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <FormControl>
                            <InputLabel htmlFor="hireStatus-selector" required>Hire Status</InputLabel>
                            <Select 
                            value={this.state.hireStatus} 
                            onChange={this.onHireStatusSelect} 
                            input={<Input id="hireStatus-selector" />}
                            required
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="new">New</MenuItem>
                                <MenuItem value="rehire">Rehire</MenuItem>
                                <MenuItem value="transfer">Transfer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <FormControl>
                            <InputLabel htmlFor="computerNeeds-selector" required>Computer Needs</InputLabel>
                            <Select 
                            value={this.state.computerNeeds} 
                            onChange={this.onComputerNeedsSelect} 
                            input={<Input id="computerNeeds-selector" />}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="new">Macbook</MenuItem>
                                <MenuItem value="rehire">Lenovo</MenuItem>
                                <MenuItem value="transfer">Mondesk</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Onboarding Campus" value={this.state.onboardingCampus} onChange={this.onOnboardingCampusEnter}/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Onboarding Buddy" value={this.state.onboardingBuddy} onChange={this.onOnboardingBuddyEnter}/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Admin Name" value={this.state.adminName} onChange={this.onAdminEnter}/>
                    </Grid>

                    {/* Non-Required Set */}
                    <Grid item xs={6} className="gridItem">
                        <TextField label="CWID" value={this.state.cwid} onChange={this.onCWIDEnter}/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="Vendor" value={this.state.vendor} onChange={this.onVendorEnter}/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <FormControl>
                            <InputLabel htmlFor="plic-selector">PL/IC</InputLabel>
                            <Select 
                            value={this.state.plic} 
                            onChange={this.onPLICSelect} 
                            input={<Input id="plic-selector" />}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="pl">PL</MenuItem>
                                <MenuItem value="ic">IC</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="SEAT Number" value={this.state.seatNum} onChange={this.onSeatNumberEnter}/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="NEID/EID" value={this.state.neid} onChange={this.onNEIDEnter}/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="New Hire/Rehire Ticket" value={this.state.newHireRehireTicket} onChange={this.onNewHireRehireTicketEnter}/>
                    </Grid>
                    <Grid item xs={6} className="gridItem">
                        <TextField label="MAC Ticket" value={this.state.macTicket} onChange={this.onMacTicketEnter}/>
                    </Grid>

                    <Grid item xs={6} className="gridItem"></Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.onSubmitClick} className="submitButton">
                    Submit
                </Button>
            </div>
        );
    }
}

export default AddHire;