import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import UpcomingDates from '../upcoming-dates/upcomingDates';
import axios from 'axios';
import './dashboard.css';
import { withSnackbar } from 'notistack';
import { currentUser } from '../../../global';
import CircularProgress from '@material-ui/core/CircularProgress';

var hireData = [];
var usersData = [];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading_hires: true, loading_users: true };

        this.setReload = this.setReload.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        this.filterQuery = this.filterQuery.bind(this);
    }

    componentDidMount() {
        hireData = [];
        usersData = [];

        axios.get('/hires').then(response => {
            console.log(response);
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
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
            console.log(response);
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

    setReload() {
        this.setState({loading_hires: true, loading_users: true});

        hireData = [];
        usersData = [];

        axios.get('/hires').then(response => {
            console.log(response);
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
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
            console.log(response);
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

    searchQuery(searchString) {
        console.log('search query');
        hireData = [];
        usersData = [];

        this.setState({loading_hires: true, loading_users: true});

        axios.post('hires/search', {
            "searchText": searchString,
            "step": null,
            "startDate": null,
            "endDate": null,
            "inactive": null,
            "cols": null
        },
        {
            headers: {
                'content-type': 'application/json',
            }
        }).then(response => {
            console.log(response);
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
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
            this.setState({loading_hires: false});
        });

        axios.get('/users').then(response => {
            console.log(response);
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
            this.setState({loading_users: false});
        });
    }

    filterQuery(filters, startDate, endDate, hideInactive) {
        hireData = [];
        usersData = [];

        this.setState({loading_hires: true, loading_users: true});

        axios.post('hires/search', {
            "searchText": null,
            "step": null,
            "startDate": startDate,
            "endDate": endDate,
            "inactive": !hideInactive,
            "cols": filters
        },
        {
            headers: {
                'content-type': 'application/json',
            }
        }).then(response => {
            console.log('FILTER QUERY: ', response);
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
        }).catch(response => {
            console.log('FILTER QUERY ERROR: ', response.response.data);
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
            this.setState({loading_hires: false});
        });

        axios.get('/users').then(response => {
            console.log(response);
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
            this.setState({loading_users: false});
        });
        
    }

    render() {
        return(
            <Paper className="dashboardWidget">
                {/* {(this.state.loading_users || this.state.loading_hires) ? <div className="loadingSpinner"><CircularProgress size="5rem"/></div> :  */}
                    <div>
                        <SearchBar search={this.searchQuery} filter={this.filterQuery}/>
                        {this.state.loading_users || this.state.loading_hires ? <div className="loadingSpinnerDashboard"><CircularProgress size="5rem"/></div> :
                            <SearchResults className="dashboardTable" data={hireData} users={usersData} setReload={this.setReload}/>
                        }                        
                        <UpcomingDates />    
                    </div>    
                {/* }         */}
            </Paper>
        );
    }
}

export default withSnackbar(Dashboard);