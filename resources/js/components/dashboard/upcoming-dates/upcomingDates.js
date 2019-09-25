import React from 'react';
import Paper from '@material-ui/core/Paper';
import './upcomingDates.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import { currentUser } from '../../../global';
import axios from 'axios';

var upcomingDates = [];

class UpcomingDates extends React.Component {
    state = { loading: true };

    componentDidMount() {
        axios.get('/users/' + currentUser.data.id + '/upcoming')
        .then(response => {
            console.log('Upcoming Dates: ', response);
            // response.data.forEach(entry => {
            //     upcomingDates.push(entry);
            // });
            for(var i = 0; i < 5; i++){
                upcomingDates.push(response.data[i]);
            }
            this.setState({loading: false});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <Paper className="upcomingDatesWidget">
                {this.state.loading ? <div className="loadingSpinner"><CircularProgress size="5rem"/></div> : 
                    <div>
                        <Paper className="upcomingDatesHeader">
                            <div className="headerText">Upcoming Dates</div>
                        </Paper>
                        <div className="upcomingDatesTableContainer">
                            <Table className="upcomingDatesTable">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Step</TableCell>
                                        <TableCell>Due Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {upcomingDates.map(entry => {
                                        return (
                                            <TableRow>
                                                <TableCell>{entry.first_name + ' ' + entry.last_name}</TableCell>
                                                <TableCell>{entry.step_name}</TableCell>
                                                <TableCell>{entry.start_date}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                }
            </Paper>
        );
    }
}

export default UpcomingDates;