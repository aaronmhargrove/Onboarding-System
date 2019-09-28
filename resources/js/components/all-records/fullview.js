/*
* Author: Matthew Chaplin
* Bayer Onboarding
* Date: 4/6/19
*/
import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from '../dashboard/dashboard-main/searchBar';
import Stepper from './table/stepper';
import FullViewTabs from './fullviewtabs';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CSVLink, CSVDownload } from "react-csv";

import './fullview.css';

const tabNames = [
    "All Steps",
    "Hire Ticket",
    "Mac Ticket",
    "Laptop Delivery",
    "Onboarding Email",
    "Add to External",
    "Completed",
]

var tabs = [
    "All Steps",
    "Hire Ticket",
    "Mac Ticket",
];

function updateTabNames(tabNumber, maxTabs, tabsShown) {
    tabs = [];

    for (let i = (tabNumber * tabsShown); (i < ((tabNumber * tabsShown) + tabsShown)) && (i < maxTabs); i++) {
        tabs.push(tabNames[i]);
    }
}

var hireData = [];
var usersData = [];
var printData = [];
var headers = [
        {label: "First Name", key: "firstName"},
        {label: "Last Name", key: "lastName"},
        {label: "Regional Location", key: "regionalLocation"},
        {label: "CWID", key: "cwid"},
        {label: "Gender", key: "gender"},
        {label: "Hire Type", key: "hireType"},
        {label: "PD Start Date", key: "pdStartDate"},
        {label: "Vendor", key: "vendor"},
        {label: "Role", key: "role"},
        {label: "PLIC", key: "plic"},
        {label: "Team Name", key: "teamName"},
        {label: "Platform", key: "platform"},
        {label: "Manager", key: "manager"},
        {label: "Manager ID", key: "manager_id"},
        {label: "Hire Status", key: "hireStatus"},
        {label: "Onboarding Buddy", key: "onboardingBuddy"},
        {label: "Computer Needs", key: "computerNeeds"},
        {label: "SEAT Number", key: "seatNum"},
        {label: "Onboarding Campus", key: "onboardingCampus"},
        {label: "Manager Comments", key: "managerComments"},
        {label: "NEID", key: "neid"},
        {label: "New Hire/Re-Hire Ticket", key: "newHireRehireTicket"},
        {label: "Date Hire Ticket Entered", key: "dateEnteredHire"},
        {label: "MAC Ticket", key: "macTicket"},
        {label: "Date MAC Ticket Entered", key: "dateEnteredMacTicket"},
        {label: "Date Laptop Delivered", key: "dateLaptopDelivered"},
        {label: "Date Onboarding Buddy Email Sent", key: "onboardingBuddyEmailSent"},
        {label: "Date Added to DLs and PD Org", key: "addToDlsAndPdOrg"},
        {label: "Date Welcome Email Sent", key: "welcomeEmailSent"},
        {label: "Admin Name", key: "adminName"},
        {label: "Admin ID", key: "admin_id"},
        {label: "Admin Assigned", key: "adminAssignedStatus"},
        {label: "CWID Assigned", key: "cwidAssignedStatus"},
        {label: "NEID Assigned", key: "neidAssignedStatus"},
        {label: "Hire Ticket Submitted", key: "hireTicketStatus"},
        {label: "MAC Ticket Submitted", key: "macTicketStatus"},
        {label: "Laptop Delivered", key: "laptopDeliveredStatus"},
        {label: "Onboarding Email Sent", key: "onboardingEmailStatus"},
        {label: "Added to DLs/PD Org", key: "addToDlsAndPdOrgStatus"},
        {label: "Welcome Email Sent", key: "welcomeEmailSentStatus"},
        {label: "Hire ID", key: "hireId"}
    ]

class FullView extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tab: 0, leftTabName: tabs[0], centerTabName: tabs[1], rightTabName: tabs[2], maxTabs: 7, garbage: 0, tabsShown: 3, loading_hires: true, loading_users: true }

        this.triggerReload = this.triggerReload.bind(this);
    }

    componentDidMount() {
        hireData = [];
        usersData = [];
        printData = [];

        axios.get('/hires').then(response => {
            console.log(response);
            response.data.forEach(hire => {
                hireData.push(hire);
                console.log("Hire:");
                console.log(hire);
                printData.push(
                    {
                        firstName: hire.first_name,
                        lastName: hire.last_name,
                        hireDate: hire.created_at,
                        regionalLocation: hire.regional_location,
                        cwid: hire.cwid ? hire.cwid : '',
                        gender: hire.gender ? hire.gender : '',
                        hireType: hire.hire_type ? hire.hire_type : '',
                        pdStartDate: hire.start_date,
                        vendor: hire.vendor,
                        role: hire.role,
                        plic: hire.pl_ic ? hire.pl_ic : '',
                        teamName: hire.team_name,
                        platform: hire.platform,
                        manager_id: hire.manager_id,
                        hireStatus: hire.hire_status,
                        onboardingBuddy: hire.onboarding_buddy,
                        computerNeeds: hire.computer_needs,
                        seatNum: hire.seat_number ? hire.seat_number : '',
                        onboardingCampus: hire.campus ? hire.campus : '',
                        managerComments: hire.manager_comments ? hire.manager_comments : '',
                        neid: hire.neid ? hire.neid : '',
                        newHireRehireTicket: hire.hire_ticket ? hire.hire_ticket : '',
                        dateEnteredHire: hire.hire_steps[3].date_completed ? hire.hire_steps[3].date_completed : '',
                        macTicket: hire.mac_ticket ? hire.mac_ticket : '',
                        dateEnteredMacTicket: hire.hire_steps[4].date_completed ? hire.hire_steps[4].date_completed : '',
                        dateLaptopDelivered: hire.hire_steps[5].date_completed ? hire.hire_steps[5].date_completed : '',
                        onboardingBuddyEmailSent: hire.hire_steps[6].date_completed ? hire.hire_steps[6].date_completed : '',
                        addToDlsAndPdOrg: hire.hire_steps[7].date_completed ? hire.hire_steps[7].date_completed : '',
                        welcomeEmailSent: hire.hire_steps[8].date_completed ? hire.hire_steps[8].date_completed : '',
                        admin_id: hire.admin_id,
                        adminAssignedStatus: this.mapValues(hire, 0),
                        cwidAssignedStatus: this.mapValues(hire, 1),
                        neidAssignedStatus: this.mapValues(hire, 2),
                        hireTicketStatus: this.mapValues(hire, 3),
                        macTicketStatus: this.mapValues(hire, 4),
                        laptopDeliveredStatus: this.mapValues(hire, 5),
                        onboardingEmailStatus: this.mapValues(hire, 6),
                        addToDlsAndPdOrgStatus: this.mapValues(hire, 7),
                        welcomeEmailSentStatus: this.mapValues(hire, 8),
                        hireId: hire.id
                    }
                );
            });
            this.setState({ loading_hires: false });
            console.log(hireData);
        }).catch(response => {
            if (response.response.status == 422) { // Validation error
                var fieldIssues = response.response.data.errors;
                var issueKeys = Object.keys(fieldIssues);
                console.log(fieldIssues)
                issueKeys.forEach(key => {
                    var issueArray = fieldIssues[key];
                    issueArray.forEach(element => {
                        this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                            variant: 'error',
                            autoHideDuration: 5000
                        });
                    });
                });
            }
            else { // Generic laravel error
                this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                    variant: 'error',
                    autoHideDuration: 10000
                });
            }
        });

        axios.get('/users').then(response => {
            response.data.forEach(user => {
                usersData.push(user);
            });
            this.setState({ loading_users: false });
        }).catch(response => {
            if (response.response.status == 422) { // Validation error
                var fieldIssues = response.response.data.errors;
                var issueKeys = Object.keys(fieldIssues);
                console.log(fieldIssues)
                issueKeys.forEach(key => {
                    var issueArray = fieldIssues[key];
                    issueArray.forEach(element => {
                        this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                            variant: 'error',
                            autoHideDuration: 5000
                        });
                    });
                });
            }
            else { // Generic laravel error
                this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                    variant: 'error',
                    autoHideDuration: 10000
                });
            }
        });
    }

    triggerReload() {
        this.setState({ loading_hires: true, loading_users: true });

        hireData = [];
        usersData = [];

        axios.get('/hires').then(response => {
            console.log(response);
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({ loading_hires: false });
            console.log(hireData);
        }).catch(response => {
            if (response.response.status == 422) { // Validation error
                var fieldIssues = response.response.data.errors;
                var issueKeys = Object.keys(fieldIssues);
                console.log(fieldIssues)
                issueKeys.forEach(key => {
                    var issueArray = fieldIssues[key];
                    issueArray.forEach(element => {
                        this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                            variant: 'error',
                            autoHideDuration: 5000
                        });
                    });
                });
            }
            else { // Generic laravel error
                this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                    variant: 'error',
                    autoHideDuration: 10000
                });
            }
        });

        axios.get('/users').then(response => {
            response.data.forEach(user => {
                usersData.push(user);
            });
            this.setState({ loading_users: false });
        }).catch(response => {
            if (response.response.status == 422) { // Validation error
                var fieldIssues = response.response.data.errors;
                var issueKeys = Object.keys(fieldIssues);
                console.log(fieldIssues)
                issueKeys.forEach(key => {
                    var issueArray = fieldIssues[key];
                    issueArray.forEach(element => {
                        this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                            variant: 'error',
                            autoHideDuration: 5000
                        });
                    });
                });
            }
            else { // Generic laravel error
                this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                    variant: 'error',
                    autoHideDuration: 10000
                });
            }
        });
    }

    mapValues(hire, index) {        
        if(hire.hire_steps[0].status == 0) {
            return 'Incomplete';
        } else if (hire.hire_steps[0].status == 1) {
            return 'In Progress';
        } else if (hire.hire_steps[0].status == 2) {
            return 'Complete';
        } else {
            return '';
        }
    }

    handleLeftButtonClick = event => {
        this.setState({ tab: this.state.tab - 1 }, () => {
            updateTabNames(this.state.tab, this.state.maxTabs, this.state.tabsShown);
            this.setState({ leftTabName: tabs[0] });
            this.setState({ centerTabName: tabs[1] });
            this.setState({ rightTabName: tabs[2] });
            this.setState({ garbage: this.state.garbage + 1 });
        })
    }

    handleRightButtonClick = event => {
        this.setState({ tab: this.state.tab + 1 }, () => {
            updateTabNames(this.state.tab, this.state.maxTabs, this.state.tabsShown);
            this.setState({ leftTabName: tabs[0] });
            this.setState({ centerTabName: tabs[1] });
            this.setState({ rightTabName: tabs[2] });
            this.setState({ garbage: this.state.garbage + 1 });
        })
    }

    render() {
        if (this.state.loading_users || this.state.loading_hires) {
            return (
                <Paper className="fullview">
                    <div className="loadingSpinner"><CircularProgress size="5rem" /></div>
                </Paper>
            );
        }
        else {
            return (
                <Paper className="fullview">
                    <div className="wrapper">
                        <SearchBar classname="searchbar" />
                    </div>
                    <div className="tabswrapper">
                        <FullViewTabs classname="tabs"
                            handleLeftButtonClick={this.handleLeftButtonClick}
                            handleRightButtonClick={this.handleRightButtonClick}
                            tabNameLeft={this.state.leftTabName}
                            tabNameCenter={this.state.centerTabName}
                            tabNameRight={this.state.rightTabName}
                            tab={this.state.tab}
                            tabsShown={this.state.tabsShown}
                            maxTabs={this.state.maxTabs}
                        />
                    </div>
                    <Stepper classname="stepper" data={hireData} users={usersData} triggerReload={this.triggerReload} />
                    <Button variant="contained" color="primary" className="export">
                        <CSVLink className="csvLink" data={printData} filename="BayerOnbaording.csv" headers={headers}>
                            Export Current Search
                        </CSVLink>
                    </Button>
                </Paper>
            );
        }
    }
}

export default FullView;