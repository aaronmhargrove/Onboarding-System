import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './addView.css';
import AddHire from './addHire';
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
                    <div className="headerText">Add New Hire</div>
                </Paper>
                {this.state.value == 'addHire' ? 
                    <Slide direction="left" in={this.state.value == 'addHire'} mountOnEnter unmountOnExit>
                        <AddHire /> 
                    </Slide>
                    : 
                    null
                }
            </Paper>
        );
    }
}

export default AddView;