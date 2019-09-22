import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import './addHire.css';

var hireTypes = [];

class AddHire extends React.Component {
    state = {
        loading: false,
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

    // componentDidMount() {
    //     axios.get('/hire-types').then((response) => {
    //         console.log(response);
    //         response.data.forEach(element => {
    //             hireTypes.push(element);
    //         });
    //         this.setState({loading: false});
    //     });
    // }

    onLastNameEnter = (event) => { 
        this.setState({lastName: event.target.value});
    }

    onFirstNameEnter = (event) => {
        this.setState({firstName: event.target.value});
    }

    onDateHiredPick = (event) => {
        this.setState({hireDate: event.target.value});
    }

    onRegionalLocationEnter = (event) => {
        this.setState({regionalLocation: event.target.value});
    }

    onGenderSelect = (event) => {
        this.setState({gender: event.target.value});
    }

    onHireTypeSelect = (event) => {
        console.log(event.target.value);
        this.setState({hireType: event.target.value});
    }

    onPdStartDatePick = (event) => {
        this.setState({pdStartDate: event.target.value});
    }

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

    onSubmitClick = () => {
        this.setState({loading: true});
        axios.post('/hires', 
            {
                "regional_location": this.state.regionalLocation,
                "first_name": this.state.firstName,
                "last_name": this.state.lastName,
                "cwid": this.state.cwid,
                "gender": this.state.gender,
                "hire_type": this.state.hireType,
                "start_date": this.state.hireDate,
                "vendor": this.state.vendor,
                "role": this.state.role,
                "pl_ic": this.state.plic,
                "team_name": this.state.teamName,
                "platform": this.state.platform,
                "manager_id": this.state.manager,
                "hire_status": this.state.hireStatus,
                "onboarding_buddy": this.state.onboardingBuddy,
                "computer_needs": this.state.computerNeeds,
                "seat_number": this.state.seatNum,
                "campus": this.state.onboardingCampus,
                "neid": this.state.neid != "" ? parseInt(this.state.neid) : null,
                "hire_ticket": this.state.newHireRehireTicket,
                "mac_ticket": this.state.macTicket,
            },
            {
                headers: {
                    'content-type': 'application/json',
                }
            }
        ).then((response) => {
            this.setState({loading: false});
            console.log(response)
        }).catch((response) => {
            this.setState({loading: false});
            console.log('Error: ' + response);
            console.log(response.response.data);
        });
    }

    render() {
        return(
            <div className="contentContainer">
                {this.state.loading ? <div className="loadingSpinner"><CircularProgress size="5rem"/></div> : 
                    <div>
                        <Grid container space={40} className="gridContainer">
                            <Grid item xs={6} className="gridItem">
                                <TextField label="Last Name" value={this.state.lastName} onChange={this.onLastNameEnter} required/>
                            </Grid>
                            <Grid item xs={6} className="gridItem">
                                <TextField label="First Name" value={this.state.firstName} onChange={this.onFirstNameEnter} required/>
                            </Grid>
                            <Grid item xs={6} className="gridItem">
                                <TextField
                                    label="Today's Date"
                                    type="date"
                                    value={this.state.hireDate}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    onChange={this.onDateHiredPick}
                                    required={true}
                                    required
                                />
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
                                        <MenuItem value="Direct">Direct</MenuItem>
                                        <MenuItem value="Contract">Contract</MenuItem>
                                        <MenuItem value="SOW">SOW</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid> 
                            <Grid item xs={6} className="gridItem">
                                <TextField
                                    label="PD Start Date"
                                    type="date"
                                    value={this.state.pdStartDate}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    onChange={this.onPdStartDatePick}
                                    required={true}
                                    required
                                />
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
                }
            </div>
        );
    }
}

export default AddHire;