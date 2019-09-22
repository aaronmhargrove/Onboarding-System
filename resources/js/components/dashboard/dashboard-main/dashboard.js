import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import axios from 'axios';
import './dashboard.css';
import CircularProgress from '@material-ui/core/CircularProgress';

var hireData = [];
var usersData = [];

class Dashboard extends React.Component {
    state = { loading_hires: true, loading_users: true };

    componentDidMount() {
        hireData = [];
        usersData = [];

        axios.get('/hires').then(response => {
            response.data.forEach(hire => {
                hireData.push(hire);
            });
            this.setState({loading_hires: false});
            console.log(hireData);
        }).catch(error => {
            console.log(error);
        });

        axios.get('/users').then(response => {
            response.data.forEach(user => {
                usersData.push(user);
            });
            this.setState({loading_users: false});
            console.log(usersData);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <Paper className="dashboardWidget">
                {(this.state.loading_users || this.state.loading_hires) ? <div className="loadingSpinner"><CircularProgress size="5rem"/></div> : 
                    <div>
                        <SearchBar />
                        <SearchResults className="dashboardTable" data={hireData} users={usersData}/>    
                    </div>    
                }        
            </Paper>
        );
    }
}

export default Dashboard;