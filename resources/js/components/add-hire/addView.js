import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './addView.css';
import AddHire from './addHire';
import AddUser from './addUser';
import Slide from '@material-ui/core/Slide';

class AddView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'addHire'
        };
    }

    onTabSelect = (event, value) => {
        this.setState({
            value: value
        });
    } 


    render() {
        return(
            <Paper className="addViewContainer">
                <Paper className="addViewHeader">
                    <Tabs 
                    value={this.state.value} 
                    onChange={this.onTabSelect} 
                    indicatorColor="primary" 
                    textColor="primary" 
                    className="addViewSelector"
                    centered={true}
                    >
                        <Tab label="Add Hire" value="addHire"></Tab>
                        <Tab label="Add User" value="addUser"></Tab>
                    </Tabs>
                </Paper>
                {this.state.value == 'addHire' ? 
                    <Slide direction="left" in={this.state.value == 'addHire'} mountOnEnter unmountOnExit>
                        <AddHire /> 
                    </Slide>
                    : 
                    null
                }
                {this.state.value == 'addUser' ? 
                    <Slide direction="right" in={this.state.value == 'addUser'} mountOnEnter unmountOnExit>
                        <AddUser />
                    </Slide> 
                    : 
                    null
                }
            </Paper>
        );
    }
}

export default AddView;