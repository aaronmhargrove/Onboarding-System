import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
});

function DatePickers(props) {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate>
        <TextField
            required={props.required}
            id="date"
            label={props.label}
            type="date"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
    );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);