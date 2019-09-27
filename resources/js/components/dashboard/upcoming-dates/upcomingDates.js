import React from 'react';
import Paper from '@material-ui/core/Paper';
import './upcomingDates.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Clear from '@material-ui/icons/Clear'
import { currentUser } from '../../../global';
import axios from 'axios';

var upcomingDates = [];

class UpcomingDates extends React.Component {
    state = { loading: true };

    componentDidMount() {
        upcomingDates = [];

        axios.get('/users/' + currentUser.data.id + '/upcoming')
            .then(response => {
                // console.log('Upcoming Dates: ', response);
                // response.data.forEach(entry => {
                //     upcomingDates.push(entry);
                // });
                for (var i = 0; i < 5; i++) {
                    upcomingDates.push(response.data[i]);
                }
                this.setState({ loading: false });
                console.log("38")
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

    render() {
        return (
            <Paper className="upcomingDatesWidget">
                {this.state.loading ? <div className="loadingSpinner"><CircularProgress size="5rem" /></div> :
                    <div>
                        <Paper className="upcomingDatesHeader">
                            <div className="headerText">Upcoming Dates</div>
                        </Paper>
                        <div className="upcomingDatesTableContainer" style={{ maxWidth: '100%' }}>
                            <MaterialTable className="table"
                                icons={{
                                    Check: Check,
                                    Clear: Clear,
                                    DetailPanel: ChevronRight,
                                    Export: SaveAlt,
                                    Filter: FilterList,
                                    FirstPage: FirstPage,
                                    LastPage: LastPage,
                                    NextPage: ChevronRight,
                                    PreviousPage: ChevronLeft,
                                    ResetSearch: Clear,
                                    Search: Search,
                                    SortArrow: ArrowDownward,
                                    ThirdStateCheck: Remove
                                }}
                                columns={
                                    [
                                        {
                                            title: 'Name',
                                            field: 'name',
                                            headerStyle: { minWidth: '6vw' },
                                            cellStyle: { minWidth: '6vw' }
                                        },
                                        {
                                            title: 'Step',
                                            field: 'step',
                                            headerStyle: { minWidth: '6vw' },
                                            cellStyle: { minWidth: '6vw' }
                                        },
                                        {
                                            title: 'Due Date',
                                            field: 'dueDate',
                                            headerStyle: { minWidth: '6vw' },
                                            cellStyle: { minWidth: '6vw' }
                                        }
                                    ]
                                }
                                data={[{
                                    name: 'Dwight Schrute',
                                    step: 'Assign Admin',
                                    dueDate: '2019-09-28'
                                }]
                                }
                                options={{
                                    search: false,
                                    paging: false,
                                    pageSize: 1,
                                    maxBodyHeight: '58vh',
                                    toolbar: false
                                }}
                                title="Demo Title"
                            />
                        </div>
                    </div>
                }
            </Paper>
        );
    }
}

export default UpcomingDates;