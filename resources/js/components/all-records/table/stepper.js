import React from 'react';
import StepperTable from './steppertable';
import StepperTableToolbar from './steppertabletoolbar';

import './stepper.css';
import { filter } from 'minimatch';


var filteredColumns = [];
var columns = [
    {
        title: 'Name',
        field: 'name'
    },
]

var columnsBase = [
    {
        title: 'Date Entered',
        field: 'hireDate',
        type: 'date'
    },
    {
        title: 'Regional Location',
        field: 'regionalLocation'
    },
    {
        title: 'CWID',
        field: 'cwid'
    },
    {
        title: 'Gender',
        field: 'gender'
    },
    {
        title: 'Hire Type',
        field: 'hireType'
    },
    {
        title: 'PD Start Date',
        field: 'pdStartDate',
        type: 'date'
    },
    {
        title: 'Vendor',
        field: 'vendor'
    },
    {
        title: 'Role',
        field: 'role'
    },
    {
        title: 'PL/IC',
        field: 'plic'
    },
    {
        title: 'Team Name',
        field: 'teamName'
    },
    {
        title: 'Platform',
        field: 'platform'
    },
    {
        title: 'Manager',
        field: 'manager'
    },
    {
        title: 'Hire Status',
        field: 'hireStatus'
    },
    {
        title: 'Onboarding Buddy',
        field: 'onboardingBuddy'
    },
    {
        title: 'Computer Needs',
        field: 'computerNeeds'
    },
    {
        title: 'SEAT Number Assigned',
        field: 'seatNum'
    },
    {
        title: 'Campus',
        field: 'onboardingCampus'
    },
    {
        title: 'Manager Comments',
        field: 'managerComments'
    },
    {
        title: 'NEID/EID',
        field: 'neid'
    },
    {
        title: 'New Hire/Re Hire',
        field: 'newHireRehireTicket'
    },
    {
        title: 'Hire Ticket Entered',
        field: 'dateEnteredHire',
        type: 'date'
    },
    {
        title: 'MAC Ticket',
        field: 'macTicket'
    },
    {
        title: 'MAC Entered',
        field: 'dateEnteredMacTicket',
        type: 'date'
    },
    {
        title: 'Laptop Delivered',
        field: 'dateLaptopDelivered',
        type: 'date'
    },
    {
        title: 'Onboarding Email Sent',
        field: 'onboardingBuddyEmailSent',
        type: 'date'
    },
    {
        title: 'Add to DLs/PD Org',
        field: 'addToDlsAndPdOrg',
        type: 'date'
    },
    {
        title: 'Welcome Email Sent',
        field: 'welcomeEmailSent',
        type: 'date'
    },
    {
        title: 'Admin Name',
        field: 'adminName'
    },
]

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 0, count: 28, columnsPerPage: 7, forceRender: 0, filteredColumns: [], isHighlightChecked: this.props.isHighlightChecked };
        this.mapColumns = this.mapColumns.bind(this);
        this.updateColumns = this.updateColumns.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.isHighlightChecked != state.isHighlightChecked) {
            return {
                isHighlightChecked: props.isHighlightChecked,
            };
        }
        return null;
    }

    mapColumns(count, filters) {
        var tempColumns = [];
        for (let i = 0; i < count; i++) {
            if (filters[i] == true) {
                tempColumns.push(columnsBase[i]);
            }
        }
        this.setState({ filteredColumns: tempColumns, count: tempColumns.length }, () => {
            this.updateColumns(this.state.page, this.state.count, this.state.columnsPerPage, this.state.filteredColumns);
            this.setState({ forceRender: 7 });
        })
    }

    updateColumns(page, count, columnsPerPage, filteredColumns) {
        columns = [];
        columns = [
            {
                title: 'Name',
                field: 'name',
            },
        ]

        for (let i = (page * columnsPerPage); (i < ((page * columnsPerPage) + columnsPerPage)) && (i < filteredColumns.length); i++) {
            columns.push(filteredColumns[i]);
        }
    }

    componentDidMount() {
        this.mapColumns(this.state.count, this.props.filters);
        this.setState({ forceRender: 6 });

    }

    handleFirstPageButtonClick = event => {
        this.setState({ page: 0 }, () => {
            this.updateColumns(this.state.page, this.state.count, this.state.columnsPerPage, this.state.filteredColumns);
            this.setState({ forceRender: 1 })
        });
    };

    handleBackButtonClick = event => {
        this.setState({ page: this.state.page - 1 }, () => {
            this.updateColumns(this.state.page, this.state.count, this.state.columnsPerPage, this.state.filteredColumns);
            this.setState({ forceRender: 2 })
        });
    };

    handleNextButtonClick = event => {
        this.setState({ page: this.state.page + 1 }, () => {
            this.updateColumns(this.state.page, this.state.count, this.state.columnsPerPage, this.state.filteredColumns);
            this.setState({ forceRender: 3 })
        });
    };

    handleLastPageButtonClick = event => {
        this.setState({
            page: Math.max(0, Math.ceil(this.state.count / this.state.columnsPerPage) - 1)
        }, () => {
            this.updateColumns(this.state.page, this.state.count, this.state.columnsPerPage, this.state.filteredColumns);
            this.setState({ forceRender: 4 })
        });
    }

    render() {
        console.log("Stepper: " + this.state.isHighlightChecked)
        return (
            <div className="stepper">
                <div style={{ height: '60vh', width: '100%' }}>
                    <StepperTable
                        theme="default"
                        onRowClick={event => console.log(event)}
                        columns={columns}
                        page={this.state.page}
                        data={this.props.data}
                        users={this.props.users}
                        triggerReload={this.props.triggerReload}
                        isHighlightChecked={this.state.isHighlightChecked}
                    />
                </div>
                <StepperTableToolbar className="toolbar"
                    handleFirstPageButtonClick={this.handleFirstPageButtonClick}
                    handleBackButtonClick={this.handleBackButtonClick}
                    handleNextButtonClick={this.handleNextButtonClick}
                    handleLastPageButtonClick={this.handleLastPageButtonClick}
                    page={this.state.page}
                    count={this.state.count}
                    columnsPerPage={this.state.columnsPerPage}
                />
            </div>
        );
    }
}

export default Stepper;