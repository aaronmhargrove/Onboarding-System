import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './login.css';

class Login extends React.Component {
    state = {username: '', password: ''};

    onUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onLoginClick = (event) => {
        console.log('Login');
        this.props.onChange('dashboard');
    }

    render() {
        return(
            <Paper className="loginContainer">
                <div className="logoContainer">
                    <img src="assets/1024px-Logo_Bayer.svg.png"/>
                </div>
                <Grid container space={40} className="loginGridContainer">
                    <Grid item xs={12} className="gridItem">
                        <TextField label="Username" value={this.state.username} onChange={this.onLastNameEnter} required/>
                    </Grid>
                    <Grid item xs={12} className="gridItem">
                        <TextField label="Password" value={this.state.password} onChange={this.onPasswordChange} required type="password"/>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.onLoginClick} className="loginButton">
                    Login
                </Button>
            </Paper>
        );
    }
}

export default Login;