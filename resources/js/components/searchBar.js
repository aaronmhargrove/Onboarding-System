import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';
import './searchBar.css';

class SearchBar extends React.Component {
    state = {searchValue: ''};

    onSearchInput = (event) => {
        this.setState({searchValue: event.target.value});
    }

    onFilterClick = (event) => {
        console.log('Filter clicked.');
    }

    onSearchClick = (event) => {
        console.log('Search clicked.');
    }

    render() {
        return(
            <Paper elevation={1} className="searchBarWidget">
                <div className="searchBar">
                    <InputBase className="searchInput" placeholder="Search Records" value={this.state.searchValue} onChange={this.onSearchInput}/>
                    <IconButton className="searchWidgetButton" onClick={this.onSearchClick}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton className="searchWidgetButton" onClick={this.onFilterClick}>
                        <FilterIcon />
                    </IconButton>
                </div>
            </Paper>
        );
    };
}

export default SearchBar;