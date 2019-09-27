import React from 'react';
import Dashboard from './dashboard/dashboard-main/dashboard';
import NavBar from './global/navBar';
import UpcomingDates from './dashboard/upcoming-dates/upcomingDates';
import AddView from './add-hire/addView';
import Login from './login/login';
import Grow from '@material-ui/core/Grow';
import './app.css';

import FullView from './all-records/fullview'
class App extends React.Component {
    state = {selection: ''};
    
    onNavBarChange = (selection) => {
        this.setState({
            selection: selection,
        });
        console.log(this.state);
    }

    render() {
        return(
            <div>
                {this.state.selection != '' ? <NavBar onChange={this.onNavBarChange}/> : null}
                {this.state.selection == '' ? <Login onChange={this.onNavBarChange}/> : null}
                {this.state.selection == 'dashboard' ? 
                    <Grow in={this.state.selection == 'dashboard'}>
                        <div className="parentContainer">
                            <Dashboard />
                        </div>
                    </Grow>
                    :
                    null
                }
                {this.state.selection == 'add' ?
                    <Grow in={this.state.selection == 'add'}>
                        <div className="parentContainer">
                            <AddView />
                        </div>
                    </Grow>
                    :
                    null
                }
                {this.state.selection == 'settings' ? 
                    <Login />
                    :
                    null
                }
                {this.state.selection == 'fullview' ?
                    <Grow in={this.state.selection == 'fullview'}>
                        <div className="parentContainer">
                            <FullView />
                        </div>
                    </Grow>
                    :
                    null    
                }
            </div>
        ); 
    }
}

export default App;