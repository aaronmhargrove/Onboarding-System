/*
* Author: Matthew Chaplin
* Bayer Onboarding
* Date: 4/6/19
*/

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import './fullviewtabs.css'

class FullViewTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tab: this.props.tab};
    }
    render() {
        return(
            <Paper elevation={1} className="tabswidget">    
                <Button className="leftButton"
                    onClick={this.props.handleLeftButtonClick}
                    disabled={this.props.tab === 0}
                >
                <KeyboardArrowLeft />
                </Button>
                <div style={{fontFamily: 'Roboto', fontSize: '.75rem'}}>{this.props.tabNameLeft}</div>
                <div style={{fontFamily: 'Roboto', fontSize: '.75rem'}}>{this.props.tabNameCenter}</div>
                <div style={{fontFamily: 'Roboto', fontSize: '.75rem'}}>{this.props.tabNameRight}</div>                
                <Button className="rightButton"
                    onClick={this.props.handleRightButtonClick}
                    disabled={this.props.tab >= Math.ceil(this.props.maxTabs / this.props.tabsShown) - 1}
                >
                <KeyboardArrowRight /></Button>
            </Paper>
        );
    }
}

export default FullViewTabs;