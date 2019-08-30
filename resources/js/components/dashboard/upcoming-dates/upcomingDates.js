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
                    <h4 className="headerText">Upcoming Dates</h4>
                </Paper>
                <div className="upcomingDatesTableContainer">
                    <Table className="upcomingDatesTable">
                        <TableHead>
                            <TableRow>
                                <TableCell>Header 1</TableCell>
                                <TableCell>Header 2</TableCell>
                                <TableCell>Header 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Data 1</TableCell>
                                <TableCell>Data 2</TableCell>
                                <TableCell>Data 3</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Data 1</TableCell>
                                <TableCell>Data 2</TableCell>
                                <TableCell>Data 3</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Data 1</TableCell>
                                <TableCell>Data 2</TableCell>
                                <TableCell>Data 3</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Data 1</TableCell>
                                <TableCell>Data 2</TableCell>
                                <TableCell>Data 3</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}

export default UpcomingDates;