import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import ExpandedView from './expanded-view-modal/expandedView';
import './dashboard.css';

class Dashboard extends React.Component {
    render() {
        return(
            <Paper className="dashboardWidget">
                <SearchBar />
                <SearchResults className="dashboardTable"/>                
            </Paper>
        );
    }
}

export default Dashboard;