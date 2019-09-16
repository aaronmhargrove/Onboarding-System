import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import axios from 'axios';
import './dashboard.css';

var hireData = [];

class Dashboard extends React.Component {
    componentDidMount() {
        axios.get('/hires').then(response => {
            console.log(response);
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            console.log(hireData);
        });
    }

    render() {
        return(
            <Paper className="dashboardWidget">
                <SearchBar />
                <SearchResults />
            </Paper>
        );
    }
}

export default Dashboard;