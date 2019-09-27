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

function updateTabNames(tabNumber, maxTabs, tabsShown)
{
    tabs = [];

    for (let i = (tabNumber * tabsShown); (i < ((tabNumber * tabsShown) + tabsShown)) && (i < maxTabs); i++)
    {
        tabs.push(tabNames[i]);
    }
}

var hireData = [];
var usersData = [];

class FullView extends React.Component {   
    constructor(props) {
        super(props);

        this.state = {tab: 0, leftTabName: tabs[0], centerTabName: tabs[1], rightTabName: tabs[2], maxTabs: 7, garbage: 0, tabsShown: 3, loading_hires: true, loading_users: true}
    
    } 

    componentDidMount(){
        hireData = [];
        usersData = [];
        
        axios.get('/hires').then(response => {
            console.log(response);
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
            console.log(hireData);
        }).catch(response => {
            if (response.response.status == 422){ // Validation error
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
            else{ // Generic laravel error
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
            this.setState({loading_users: false});
        }).catch(response => {
            if (response.response.status == 422){ // Validation error
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
            else{ // Generic laravel error
                this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                    variant: 'error',
                    autoHideDuration: 10000
                });
            }
        });
    }

    handleLeftButtonClick = event => {
        this.setState({tab: this.state.tab - 1}, () => {
            updateTabNames(this.state.tab, this.state.maxTabs, this.state.tabsShown);
            this.setState({leftTabName: tabs[0]});
            this.setState({centerTabName: tabs[1]});
            this.setState({rightTabName: tabs[2]});
            this.setState({garbage: this.state.garbage + 1});
        })
    }

    handleRightButtonClick = event => {
        this.setState({tab: this.state.tab + 1}, () => {
            updateTabNames(this.state.tab, this.state.maxTabs, this.state.tabsShown);
            this.setState({leftTabName: tabs[0]});
            this.setState({centerTabName: tabs[1]});
            this.setState({rightTabName: tabs[2]});
            this.setState({garbage: this.state.garbage + 1});
        })
    }

    render() {
        if(this.state.loading_users || this.state.loading_hires) {
            return(
                <Paper className="fullview">
                    <div className="loadingSpinner"><CircularProgress size="5rem"/></div> 
                </Paper>
            );
        }
        else {
            return(
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
                    <Stepper classname="stepper" data={hireData} users={usersData}/>
                    <Button variant="contained" color="primary" className="export">Export Current Search</Button>
                </Paper>
            );
        }
    }
}

export default FullView;