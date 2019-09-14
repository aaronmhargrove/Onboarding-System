import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';
import CreateIcon from '@material-ui/icons/Create';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import './searchBar.css';

class SearchBar extends React.Component {
    state = {
        searchValue: '', 
        filterModalOpen: false,
        dateRangeModalOpen: false,
        dateEnteredFlag: true,
        regionalLocationFlag: true,
        cwidFlag: true,
        genderFlag: true,
        hireTypeFlag: true,
        pdStartDateFlag: true,
        vendorFlag: true,
        roleFlag: true,
        plicFlag: true,
        teamNameFlag: true,
        platformFlag: true,
        managerFlag: true,
        hireStatusFlag: true,
        onboardingBuddyFlag: true,
        computerNeedsFlag: true,
        seatNumberAssignedFlag: true,
        campusFlag: true,
        managerCommentsFlag: true,
        neidFlag: true,
        hireRehireFlag: true,
        dateHireRehireFlag: true,
        macTicketFlag: true,
        dateMacTicketFlag: true,
        dateLaptopDeliveredFlag: true,
        onboardingEmailFlag: true,
        addToDlsFlag: true,
        welcomeEmailFlag: true,
        adminNameFlag: true,
    };

    onSearchInput = (event) => {
        this.setState({searchValue: event.target.value});
    }

    onFilterClick = (event) => {
        console.log('Filter clicked.');
        this.setState({
            filterModalOpen: true
        });
    }

    onRangeClick = (event) => {
        this.setState({
            dateRangeModalOpen: true
        });
    }

    onSearchClick = (event) => {
        console.log('Search clicked.');
    }

    onHighlightClick = (event) => {
        console.log('Highlight clicked.');
    }

    onModalClose = (event) => {
        this.setState({
            filterModalOpen: false
        });
    }

    onRangeModalClose = (event) => {
        this.setState({
            dateRangeModalOpen: false
        });
    }

    render() {
        return(
            <Paper elevation={1} className="searchBarWidget">
                <div className="searchBar">
                    <InputBase className="searchInput" placeholder="Search Records" value={this.state.searchValue} onChange={this.onSearchInput}/>
                    <IconButton className="searchWidgetButton" onClick={this.onSearchClick}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton className="searchWidgetButton" onClick={this.onFilterClick}>
                        <FilterIcon />
                    </IconButton>
                    <Modal
                        open={this.state.filterModalOpen}
                        onClose={this.onModalClose}
                    >
                        <Paper className="filterWidget">
                            <div className="filterHeaderText">
                                Filter List
                            </div>
                            <Divider className="headerDivider"/>
                            <Grid container space={40} className="gridContainer">
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.dateEnteredFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            dateEnteredFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Date Entered"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">

                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.regionalLocationFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            regionalLocationFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Regional Location"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.cwidFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            cwidFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="CWID"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.genderFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            genderFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Gender"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.hireTypeFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            hireTypeFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Hire Type"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.pdStartDateFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            pdStartDateFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="PD Start Date"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.vendorFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            vendorFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Vendor"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.roleFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            roleFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Role"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.plicFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            plicFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="PL/IC"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.teamNameFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            teamNameFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Team Name"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.platformFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            platformFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Platform"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.managerFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            managerFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Manager"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.hireStatusFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            hireStatusFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Hire Status"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.onboardingBuddyFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            onboardingBuddyFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Onboarding Buddy"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.computerNeedsFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            computerNeedsFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Computer Needs"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.seatNumberAssignedFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            seatNumberAssignedFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="SEAT Number Assigned"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.campusFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            campusFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Campus"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.managerCommentsFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            managerCommentsFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Manager Comments"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.neidFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            neidFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="NEID/EID"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.hireRehireFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            hireRehireFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Hire/Rehire"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.dateHireRehireFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            dateHireRehireFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Date Hire/Rehire Entered"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.macTicketFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            macTicketFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="MAC Ticket"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.dateMacTicketFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            dateMacTicketFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Date MAC Ticket Entered"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.dateLaptopDeliveredFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            dateLaptopDeliveredFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Date Laptop Delivered"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.onboardingEmailFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            onboardingEmailFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Onboarding Buddy Email Sent"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.addToDlsFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            addToDlsFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Add to DLs and PD Org"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.welcomeEmailFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            welcomeEmailFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Welcome Email Sent"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.adminNameFlag}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            adminNameFlag: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Admin Name"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <KeyboardDatePicker 
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">

                                </Grid>
                            </Grid>
                        </Paper>
                    </Modal>
                    <IconButton className="searchWidgetButton" onClick={this.onHighlightClick}>
                        <CreateIcon />
                    </IconButton>
                    <IconButton className="searchWidgetButton" onClick={this.onRangeClick}>
                        <CalendarIcon />
                    </IconButton>
                    <Modal
                        open={this.state.dateRangeModalOpen}
                        onClose={this.onRangeModalClose}
                    >
                        <Paper className="datePickerWidget">
                            <div className="datePickerHeader">Select a Date Range</div>
                            <Divider className="headerDivider"/>
                            <Grid container space={40} className="gridContainer">
                                <Grid item xs={6} className="gridItem">
                                    <TextField
                                        label="Start Date"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <TextField
                                        label="End Date"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Modal>
                </div>
            </Paper>
        );
    };
}

export default SearchBar;