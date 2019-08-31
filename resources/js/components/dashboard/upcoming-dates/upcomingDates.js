import React from 'react';
import Paper from '@material-ui/core/Paper';
import './upcomingDates.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class UpcomingDates extends React.Component {
    render() {
        return(
            <Paper className="upcomingDatesWidget">
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
                            <TableRow>
                                <TableCell>John Smith</TableCell>
                                <TableCell>Step 2</TableCell>
                                <TableCell>8/30</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Frank Martin</TableCell>
                                <TableCell>Step 3</TableCell>
                                <TableCell>9/3</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Louisa Homer</TableCell>
                                <TableCell>Step 4</TableCell>
                                <TableCell>9/7</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Ian Gonert</TableCell>
                                <TableCell>Step 5</TableCell>
                                <TableCell>9/8</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}

export default UpcomingDates;