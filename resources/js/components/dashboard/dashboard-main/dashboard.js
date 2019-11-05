import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import UpcomingDates from '../upcoming-dates/upcomingDates';
import axios from 'axios';
import './dashboard.css';
import { withSnackbar } from 'notistack';
import { currentUser, getCurrentUser, setCurrentUser } from '../../../global';
import CircularProgress from '@material-ui/core/CircularProgress';

var hireData = [];
var usersData = [];
var upcomingDates = [];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            loading_hires: true, 
            loading_users: true,
            loading_dates: true,
            searchString: "",
            filters: [],
            startDate: "",
            endDate: "",
            hideInactive: true,                        
            isHighlightChecked: false
        };

        this.setReload = this.setReload.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        this.filterQuery = this.filterQuery.bind(this);
        this.highlightQuery = this.highlightQuery.bind(this);
    }

    componentDidMount() {
        hireData = [];
        usersData = [];
        upcomingDates = [];

        axios.get('/hires').then(response => {
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
        }).catch(response => {
            if (response.response.status == 422){ // Validation error
                var fieldIssues = response.response.data.errors;
                var issueKeys = Object.keys(fieldIssues);
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


        getCurrentUser().then(response => {
            setCurrentUser(response)

            if (currentUser != null) {
                axios.get('/users/' + currentUser.id + '/upcoming')
                .then(response => {
                    response.data.forEach(entry => {
                        upcomingDates.push({
                            lastName: entry.last_name,
                            firstName: entry.first_name,
                            name: entry.last_name + ", " + entry.first_name,
                            step: entry.step_name,
                            daysRemaining: entry.days_left,
                            startDate: entry.start_date
                        });
                    });
                    this.setState({ loading_dates: false });
                }).catch(response => {
                    if (response.response.status == 422) { // Validation error
                        var fieldIssues = response.response.data.errors;
                        var issueKeys = Object.keys(fieldIssues);
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
                    this.setState({ loading_dates: false });
                });
            }
        });
    }

    setReload() {
        this.setState({loading_hires: true, loading_users: true, loading_dates: true});

        hireData = [];
        usersData = [];
        upcomingDates = [];

        axios.post('hires/search', {
            "searchText": this.state.searchString,
            "step": null,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate,
            "inactive": !this.state.hideInactive,
            "cols": this.state.filters
        },
        {
            headers: {
                'content-type': 'application/json',
            }
        }).then(response => {
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
        }).catch(response => {
            if (response.response.status == 422){ // Validation error
                var fieldIssues = response.response.data.errors;
                var issueKeys = Object.keys(fieldIssues);
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
            this.setState({loading_hires: false});
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


        getCurrentUser().then(response => {
            setCurrentUser(response)
            
            if (currentUser != null) {
                axios.get('/users/' + currentUser.id + '/upcoming')
                .then(response => {
                    response.data.forEach(entry => {
                        upcomingDates.push({
                            lastName: entry.last_name,
                            firstName: entry.first_name,
                            name: entry.last_name + ", " + entry.first_name,
                            step: entry.step_name,
                            daysRemaining: entry.days_left,
                            startDate: entry.start_date
                        });
                    });
                    this.setState({ loading_dates: false });
                }).catch(response => {
                    if (response.response.status == 422) { // Validation error
                        var fieldIssues = response.response.data.errors;
                        var issueKeys = Object.keys(fieldIssues);
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
                    this.setState({ loading_dates: false });
                });
            }
        })
    }

    query() {
        hireData = [];
        usersData = [];

        this.setState({loading_hires: true, loading_users: true});

        axios.post('hires/search', {
            "searchText": this.state.searchString,
            "step": null,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate,
            "inactive": !this.state.hideInactive,
            "cols": this.state.filters
        },
        {
            headers: {
                'content-type': 'application/json',
            }
        }).then(response => {
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
        }).catch(response => {
            if (response.response.status == 422){ // Validation error
                var fieldIssues = response.response.data.errors;
                var issueKeys = Object.keys(fieldIssues);
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
            this.setState({loading_hires: false});
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
            this.setState({loading_users: false});
        });
    }

    searchQuery(searchString) {
        this.setState({
            searchString: searchString
        }, () => {
            this.query();
        });
    }

    filterQuery(filters, startDate, endDate, hideInactive) {
        this.setState({
            filters: filters,
            startDate: startDate,
            endDate: endDate,
            hideInactive: hideInactive
        }, () => {
            this.query();
        });
    }

    highlightQuery(isHighlightChecked) {
        this.setState({ isHighlightChecked: isHighlightChecked })
    }

    render() {
        return(
            <Paper className="dashboardWidget">
                {/* {(this.state.loading_users || this.state.loading_hires) ? <div className="loadingSpinner"><CircularProgress size="5rem"/></div> :  */}
                    <div>
                    <SearchBar search={this.searchQuery} filter={this.filterQuery} highlight={this.highlightQuery} isHighlightChecked={this.state.isHighlightChecked}/>
                        {this.state.loading_dates || this.state.loading_users || this.state.loading_hires ? <div className="loadingSpinnerDashboard"><CircularProgress size="5rem"/></div> :
                            <SearchResults className="dashboardTable" data={hireData} users={usersData} setReload={this.setReload} isHighlightChecked={this.state.isHighlightChecked}/>
                        }                        
                        <div className="upcomingDatesWidget">
                            <div>
                                <Paper className="upcomingDatesHeader">
                                    <div className="headerText">Tasks Before Start Date</div>
                                </Paper>
                            </div>
                            {this.state.loading_dates || this.state.loading_users || this.state.loading_hires ? <div className="loadingSpinner"><CircularProgress size="5rem"/></div> :
                                <UpcomingDates upcomingDates={upcomingDates} data={hireData} setReload={this.setReload} users={usersData}/>  
                            }
                        </div>  
                    </div>    
                {/* }         */}
            </Paper>
        );
    }
}

export default withSnackbar(Dashboard);