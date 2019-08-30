import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ReportIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/AddCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FullViewIcon from '@material-ui/icons/FormatListBulleted';
import SettingsIcon from '@material-ui/icons/Person';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import './navBar.css';

class NavBar extends React.Component {
    state = {selectedIcon: 'dashboard', open: false};

    onIconChange = (event, value) => {
        this.setState({
            selectedIcon: value
        });
        this.props.onChange(value);
    }

    openSettingsMenu = (event) => {
        this.setState(state => ({ open: !state.open }));
    }

    closeSettingsMenu = (event) => {
        this.setState({anchorElement: null});
    }

    render() {
        return(
            <BottomNavigation value={this.state.selectedIcon} onChange={this.onIconChange} className="navbar">
                <BottomNavigationAction className="navicon" label="Dashboard" value="dashboard" icon={<DashboardIcon />} />
                <BottomNavigationAction className="navicon" label="All Records" value="fullview" icon={<FullViewIcon />} />
                <BottomNavigationAction className="navicon" label="Add Record" value="add" icon={<AddIcon />} />
                <Button 
                    color="primary" 
                    className="settingsbutton"
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    aria-owns={this.state.open ? 'settings-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.openSettingsMenu}
                >
                    <SettingsIcon />
                </Button>
                {/* Material-UI Tutorial Rip */}
                <Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="settings-menu"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                            <ClickAwayListener onClickAway={this.closeSettingsMenu}>
                                <MenuList>
                                <MenuItem onClick={this.closeSettingsMenu}>Set Filter</MenuItem>
                                <MenuItem onClick={this.closeSettingsMenu}>Change Password</MenuItem>
                                <MenuItem onClick={this.closeSettingsMenu}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </BottomNavigation>
        );
    }
}

export default NavBar;