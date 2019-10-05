import React from 'react';
import Paper from '@material-ui/core/Paper';
import './upcomingDates.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Clear from '@material-ui/icons/Clear'

class UpcomingDates extends React.Component {
    constructor(props) {
        super(props);
        displayData = [];
    
        console.log(props);
        this.props.data.forEach(hire => {
          displayData.push(
            {
              firstName: hire.first_name,
              lastName: hire.last_name,
              name: hire.last_name + ", " + hire.first_name,
              hireDate: hire.created_at,
              regionalLocation: hire.regional_location,
              cwid: hire.cwid ? hire.cwid : '',
              gender: hire.gender ? hire.gender : '',
              hireType: hire.hire_type ? hire.hire_type : '',
              pdStartDate: hire.start_date,
              vendor: hire.vendor,
              role: hire.role,
              plic: hire.pl_ic ? hire.pl_ic : '',
              teamName: hire.team_name,
              platform: hire.platform,
              manager: this.props.users[hire.manager_id - 1] ? this.props.users[hire.manager_id - 1].name : '',
              manager_id: hire.manager_id,
              hireStatus: hire.hire_status,
              onboardingBuddy: hire.onboarding_buddy,
              computerNeeds: hire.computer_needs,
              seatNum: hire.seat_number ? hire.seat_number : '',
              onboardingCampus: hire.campus ? hire.campus : '',
              managerComments: hire.manager_comments ? hire.manager_comments : '',
              neid: hire.neid ? hire.neid : '',
              newHireRehireTicket: hire.hire_ticket ? hire.hire_ticket : '',
              dateEnteredHire:  hire.hire_steps[3].date_completed ? hire.hire_steps[3].date_completed : '',
              macTicket: hire.mac_ticket ? hire.mac_ticket : '',
              dateEnteredMacTicket: hire.hire_steps[4].date_completed ? hire.hire_steps[4].date_completed : '',
              dateLaptopDelivered: hire.hire_steps[5].date_completed ? hire.hire_steps[5].date_completed : '',
              onboardingBuddyEmailSent: hire.hire_steps[6].date_completed ? hire.hire_steps[6].date_completed : '',
              addToDlsAndPdOrg: hire.hire_steps[7].date_completed ? hire.hire_steps[7].date_completed : '',
              welcomeEmailSent: hire.hire_steps[8].date_completed ? hire.hire_steps[8].date_completed : '',
              adminName: this.props.users[hire.admin_id - 1] ? this.props.users[hire.admin_id - 1].name : '',
              admin_id: hire.admin_id,
              adminAssignedStatus: hire.hire_steps[0].status,
              cwidAssignedStatus: hire.hire_steps[1].status,
              neidAssignedStatus: hire.hire_steps[2].status,
              hireTicketStatus: hire.hire_steps[3].status,
              macTicketStatus: hire.hire_steps[4].status,
              laptopDeliveredStatus: hire.hire_steps[5].status,
              onboardingEmailStatus: hire.hire_steps[6].status,
              addToDlsAndPdOrgStatus: hire.hire_steps[7].status,
              welcomeEmailSentStatus: hire.hire_steps[8].status,
              hireId: hire.id
            }
          );
        });
    
        this.state = {
          unlocked: false,
          modalLoading: false,
          filterModalOpen: false,
          hireId: null,
          lastName: '',
          firstName: '',
          name: '',
          hireDate: '',
          regionalLocation: '',
          gender: '',
          hireType: '',
          pdStartDate: '',
          role: '',
          teamName: '',
          platform: '',
          manager: '',
          hireStatus: '',
          computerNeeds: '',
          onboardingCampus: '',
          onboardingBuddy: '',
          adminName: '',
          admin_id: null,
          cwid: '',
          vendor: '',
          plic: '',
          seatNum: '',
          neid: '',
          newHireRehireTicket: '',
          macTicket: '',
          managerComments: '',
          dateEnteredHire: '',
          dateEnteredMacTicket: '',
          dateLaptopDelivered: '',
          onboardingBuddyEmailSent: '',
          addToDlsAndPdOrg: '',
          welcomeEmailSent: '',
          adminAssignedStatus: '',
          cwidAssignedStatus: '',
          neidAssignedStatus: '',
          hireTicketStatus: '',
          macTicketStatus: '',
          laptopDeliveredStatus: '',
          onboardingEmailStatus: '',
          addToDlsAndPdOrgStatus: '',
          welcomeEmailSentStatus: '',
          manager_id: null,
          adminAssignedStatusChanged: false,
          cwidAssignedStatusChanged: false,
          neidAssignedStatusChanged: false,
          hireTicketStatusChanged: false,
          macTicketStatusChanged: false,
          laptopDeliveredStatusChanged: false,
          onboardingEmailStatusChanged: false,
          addToDlsAndPdOrgStatusChanged: false,
          welcomeEmailSentStatusChanged: false,
          startDateChanged: false,
          isHighlightChecked: this.props.isHighlightChecked
        };
      }

    render() {
        return (
            <div className="upcomingDatesTableContainer" style={{ maxWidth: '100%' }}>
                <MaterialTable className="table"
                    icons={{
                        Check: Check,
                        Clear: Clear,
                        DetailPanel: ChevronRight,
                        Export: SaveAlt,
                        Filter: FilterList,
                        FirstPage: FirstPage,
                        LastPage: LastPage,
                        NextPage: ChevronRight,
                        PreviousPage: ChevronLeft,
                        ResetSearch: Clear,
                        Search: Search,
                        SortArrow: ArrowDownward,
                        ThirdStateCheck: Remove
                    }}
                    columns={
                        [
                            {
                                title: 'Name',
                                field: 'name',
                                headerStyle: { minWidth: '33%' },
                                cellStyle: { minWidth: '33%' }
                            },
                            {
                                title: 'Step',
                                field: 'step',
                                headerStyle: { minWidth: '33%' },
                                cellStyle: { minWidth: '33%' }
                            },
                            {
                                title: 'Days Remaining',
                                field: 'daysRemaining',
                                headerStyle: { minWidth: '33%' },
                                cellStyle: { minWidth: '33%' }
                            }
                        ]
                    }
                    data={this.props.upcomingDates}
                    options={{
                        search: false,
                        paging: false,
                        pageSize: 1,
                        maxBodyHeight: '70vh',
                        toolbar: false,
                        rowStyle: rowData => {
                            if(rowData.daysRemaining < 1) {
                                return {backgroundColor: '#ffe1e6'};
                            } else if ((rowData.daysRemaining < 4) && (rowData.daysRemaining > 0)) {
                                return {backgroundColor: '#ffffc7'}; 
                            }
                        }
                    }}
                    title="Demo Title"
                />
            </div>
        );
    }
}

export default UpcomingDates;