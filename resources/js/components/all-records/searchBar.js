import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';
import CreateIcon from '@material-ui/icons/Create';
import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './searchBar.css';
import { withSnackbar } from 'notistack';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        console.log("dateEnteredchecked: " + this.props.selectedFilters[0])
        this.state = {
            searchValue: '', 
            filterModalOpen: false,
            dateEnteredFlag: this.props.selectedFilters[0],
            regionalLocationFlag: this.props.selectedFilters[1],
            cwidFlag: this.props.selectedFilters[2],
            genderFlag: this.props.selectedFilters[3],
            hireTypeFlag: this.props.selectedFilters[4],
            pdStartDateFlag: this.props.selectedFilters[5],
            vendorFlag: this.props.selectedFilters[6],
            roleFlag: this.props.selectedFilters[7],
            plicFlag: this.props.selectedFilters[8],
            teamNameFlag: this.props.selectedFilters[9],
            platformFlag: this.props.selectedFilters[10],
            managerFlag: this.props.selectedFilters[11],
            hireStatusFlag: this.props.selectedFilters[12],
            onboardingBuddyFlag: this.props.selectedFilters[13],
            computerNeedsFlag: this.props.selectedFilters[14],
            seatNumberAssignedFlag: this.props.selectedFilters[15],
            campusFlag: this.props.selectedFilters[16],
            managerCommentsFlag: this.props.selectedFilters[17],
            neidFlag: this.props.selectedFilters[18],
            hireRehireFlag: this.props.selectedFilters[19],
            dateHireRehireFlag: this.props.selectedFilters[20],
            macTicketFlag: this.props.selectedFilters[21],
            dateMacTicketFlag: this.props.selectedFilters[22],
            dateLaptopDeliveredFlag: this.props.selectedFilters[23],
            onboardingEmailFlag: this.props.selectedFilters[24],
            addToDlsFlag: this.props.selectedFilters[25],
            welcomeEmailFlag: this.props.selectedFilters[26],
            adminNameFlag: this.props.selectedFilters[27],
            startRangeDate: '',
            endRangeDate: '',
            hideInactive: true,
        };
    }

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
        this.props.search(this.state.searchValue);
    }

    onHighlightClick = (event) => {
        console.log('Highlight clicked.');
    }

    onModalClose = (event) => {
        this.setState({
            filterModalOpen: false
        });

        var filters = [
            this.state.dateEnteredFlag, 
            this.state.regionalLocationFlag,
            this.state.cwidFlag,
            this.state.genderFlag,
            this.state.hireTypeFlag,
            this.state.pdStartDateFlag,
            this.state.vendorFlag,
            this.state.roleFlag,
            this.state.plicFlag,
            this.state.teamNameFlag,
            this.state.platformFlag,
            this.state.managerFlag,
            this.state.hireStatusFlag,
            this.state.onboardingBuddyFlag,
            this.state.computerNeedsFlag,
            this.state.seatNumberAssignedFlag,
            this.state.campusFlag,
            this.state.managerCommentsFlag,
            this.state.neidFlag,
            this.state.hireRehireFlag,
            this.state.dateHireRehireFlag,
            this.state.macTicketFlag,
            this.state.dateMacTicketFlag,
            this.state.dateLaptopDeliveredFlag,
            this.state.onboardingEmailFlag,
            this.state.addToDlsFlag,
            this.state.welcomeEmailFlag,
            this.state.adminNameFlag,
        ];

        this.props.filter(filters, this.state.startRangeDate, this.state.endRangeDate, this.state.hideInactive);
    }

    enterPressed = (event) => {
        if(event.key == "Enter"){
            this.onSearchClick();
        }
    }

    onStartDatePick = (event) => {
        this.setState({
            startRangeDate: event.target.value,
        });
    }

    onEndDatePick = (event) => {
        this.setState({
            endRangeDate: event.target.value,
        });
    }

    render() {
        return(
            <Paper elevation={1} className="searchBarWidget">
                <div className="searchBar">
                <InputBase 
                        className="searchInput" 
                        placeholder="Search Records" 
                        value={this.state.searchValue} 
                        onChange={this.onSearchInput}
                        onKeyPress={this.enterPressed.bind(this)}
                    />
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
                                <Grid item xs={12} className="headerGrid">
                                    <div className="columnFilterHeader">Columns Shown</div>
                                    <Divider className="headerDivider"/>
                                </Grid>
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
                                <Grid item xs={12} className="headerGrid">
                                    <Divider className="headerDivider"/>
                                    <div className="dateRangeHeader">Date Range</div>
                                    <Divider className="headerDivider"/>
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <TextField
                                        label="Start Date"
                                        type="date"
                                        value={this.state.startRangeDate}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        onChange={this.onStartDatePick}
                                    />
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <TextField
                                        label="End Date"
                                        type="date"
                                        value={this.state.endRangeDate}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        onChange={this.onEndDatePick}
                                    />
                                </Grid>
                                <Grid item xs={12} className="headerGrid">
                                    <Divider className="headerDivider"/>
                                    <div className="dateRangeHeader">Toggle Inactive Hires</div>
                                    <Divider className="headerDivider"/>
                                </Grid>
                                <Grid item xs={6} className="gridItem">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                checked={this.state.hideInactive}
                                                onChange={
                                                    (event) => {
                                                        this.setState({
                                                            hideInactive: event.target.checked
                                                        });
                                                    }
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Hide Inactive Hires"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Modal>
                    <IconButton className="searchWidgetButton" onClick={this.onHighlightClick}>
                        <CreateIcon />
                    </IconButton>
                </div>
            </Paper>
        );
    };
}

export default withSnackbar(SearchBar);