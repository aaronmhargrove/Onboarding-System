/*
* Author: Matthew Chaplin
* Bayer Onboarding
* Date: 4/6/19
*/


import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import './steppertabletoolbar.css';

class StepperTableToolbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {page: this.props.page, count: this.props.page, columnsPerPage: this.props.columnsPerPage};
    }

    

    render() {

        const { classes, count, page, rowsPerPage, theme } = this.props;

        return(
            <div className="buttonholder">
                <IconButton
          className="buttons"
          onClick={this.props.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          className="buttons"
          onClick={this.props.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          className="buttons"
          onClick={this.props.handleNextButtonClick}
          disabled={page >= Math.ceil(count / this.props.columnsPerPage) - 1}
          aria-label="Next Page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          className="buttons"
          onClick={this.props.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / this.props.columnsPerPage) - 1}
          aria-label="Last Page"
        >
          <LastPageIcon />
        </IconButton>
            </div>
        );
    }
}

export default StepperTableToolbar;