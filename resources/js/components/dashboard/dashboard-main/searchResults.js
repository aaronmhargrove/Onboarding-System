import React from 'react';
import MaterialTable from 'material-table';
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import HourglassEmpty from '@material-ui/icons/HourglassEmpty'
import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Done from '@material-ui/icons/Done'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Clear from '@material-ui/icons/Clear'

import './searchResults.css';

var displayData = [];

class searchResults extends React.Component {
  constructor(props) {
    super(props);

    displayData = [];

    console.log(props);
    this.props.data.forEach(hire => {
      displayData.push(
        {
          name: hire.last_name + ", " + hire.first_name,
          hireDate: hire.created_at,
          regionalLocation: hire.regional_location,
          cwid: hire.cwid ? hire.cwid : '',
          gender: hire.gender ? hire.gender : '',
          hireType: hire.hire_type ? hire.hire_type : '',
          pdStartDate: hire.hire_date,
          vendor: hire.vendor,
          role: hire.role,
          plic: hire.pl_ic ? hire.pl_ic : '',
          teamName: hire.team_name,
          platform: hire.platform,
          manager: this.props.users[hire.manager_id - 1].name,
          hireStatus: hire.hire_status,
          onboardingBuddy: hire.onboarding_buddy,
          computerNeeds: hire.computer_needs,
          seatNum: hire.seat_number ? hire.seat_number : '',
          onboardingCampus: hire.campus ? hire.campus : '',
          managerComments: hire.manager_comments ? hire.manager_comments : '',
          neid: hire.neid ? hire.neid : '',
          newHireRehireTicket: hire.hire_ticket ? hire.hire_ticket : '',
          dateEnteredHire:  hire.hire_steps[3].step_name ? hire.hire_steps[3].step_name : '',
          macTicket: hire.mac_ticket ? hire.mac_ticket : '',
          dateEnteredMacTicket: hire.hire_steps[4].step_name ? hire.hire_steps[4].step_name : '',
          dateLaptopDelivered: hire.hire_steps[5].step_name ? hire.hire_steps[5].step_name : '',
          onboardingBuddyEmailSent: hire.hire_steps[6].step_name ? hire.hire_steps[6].step_name : '',
          addToDlsAndPdOrg: hire.hire_steps[7].step_name ? hire.hire_steps[7].step_name : '',
          welcomeEmailSent: hire.hire_steps[8].step_name ? hire.hire_steps[8].step_name : '',
          adminName: this.props.users[hire.admin_id - 1].name,
          hireTicketStatus: hire.hire_steps[3].status,
          macTicketStatus: hire.hire_steps[4].status,
          laptopDeliveredStatus: hire.hire_steps[5].status,
          onboardingEmailStatus: hire.hire_steps[6].status,
          addToDlsAndPdOrgStatus: hire.hire_steps[7].status,
        }
      );
    });

    this.state = {
      filterModalOpen: false,
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
      hireTicketStatus: '',
      macTicketStatus: '',
      laptopDeliveredStatus: '',
      onboardingEmailStatus: '',
      addToDlsAndPdOrgStatus: ''
    };
  }

  onModalClose = () => {
    this.setState({
      filterModalOpen: false
    });
  }
  onModalOpen = (rowData) => {
    this.setState({
      filterModalOpen: true
    });
  }
  
  onLastNameEnter = (event) => { 
    this.setState({lastName: event.target.value});
  }

  onFirstNameEnter = (event) => {
    this.setState({firstName: event.target.value});
  }

  onDateHiredPick = (event) => {
    this.setState({dateEnteredHire: event.target.value});
  }

  onRegionalLocationEnter = (event) => {
    this.setState({regionalLocation: event.target.value});
  } 

  onGenderSelect = (event) => {
    this.setState({gender: event.target.value});
  }

  onHireTypeSelect = (event) => {
    this.setState({hireType: event.target.value});
  }

  onPdStartDatePick = (event) => {
    this.setState({pdStartDate: event.target.value});
  }

  onRoleEnter = (event) => {
    this.setState({role: event.target.value});
  }

  onTeamNameEnter = (event) => {
    this.setState({teamName: event.target.value});
  }

  onPlatformEnter = (event) => {
    this.setState({platform: event.target.value});
  }

  onManagerEnter = (event) => {
    this.setState({manager: event.target.value});
  }

  onHireStatusSelect = (event) => {
    this.setState({hireStatus: event.target.value});
  }

  onComputerNeedsSelect = (event) => {
    this.setState({computerNeeds: event.target.value});
  }

  onOnboardingCampusEnter = (event) => {
    this.setState({onboardingCampus: event.target.value});
  }

  onOnboardingBuddyEnter = (event) => {
    this.setState({onboardingBuddy: event.target.value});
  }

  onAdminEnter = (event) => {
    this.setState({adminName: event.target.value});
  }

  onCWIDEnter = (event) => {
    this.setState({cwid: event.target.value});
  }

  onVendorEnter = (event) => {
    this.setState({vendor: event.target.value});
  }

  onPLICSelect = (event) => {
    this.setState({plic: event.target.value});
  }

  onSeatNumberEnter = (event) => {
    this.setState({seatNum: event.target.value});
  }

  onNEIDEnter = (event) => {
    this.setState({neid: event.target.value});
  }

  onNewHireRehireTicketEnter = (event) => {
    this.setState({newHireRehireTicket: event.target.value});
  }

  onMacTicketEnter = (event) => {
    this.setState({macTicket: event.target.value});
  }

  onManagerCommentsEnter = (event) => {
    this.setState({managerComments: event.target.value});
  }

  onDateEnteredHireDatePick = (event) => {
    this.setState({dateEnteredHire: event.target.value});
  }

  onDateEnteredMacTicketDatePick = (event) => {
    this.setState({dateEnteredMacTicket: event.target.value});
  }

  onDateLaptopDeliveredDatePick = (event) => {
    this.setState({dateLaptopDelivered: event.target.value});
  }

  onOnboardingBuddyEmailSentDatePick = (event) => {
    this.setState({onboardingBuddyEmailSent: event.target.value});
  }

  onAddToDlsAndPdOrgDatePick = (event) => {
    this.setState({addToDlsAndPdOrg: event.target.value});
  }

  onWelcomeEmailSentDatePick = (event) => {
    this.setState({welcomeEmailSent: event.target.value});
  }

  onHireStatusChange = (event) => {
    this.setState({ hireTicketStatus: ((this.state.hireTicketStatus + 1) % 3) });
  }

  onMACTicketStatusChange = (event) => {
    this.setState({ macTicketStatus: ((this.state.macTicketStatus + 1) % 3) });
  }

  onLaptopDeliveredStatusChange = (event) => {
    this.setState({ laptopDeliveredStatus: ((this.state.laptopDeliveredStatus + 1) % 3) });
  }

  onOnboardingEmailStatusChange = (event) => {
    this.setState({ onboardingEmailStatus: ((this.state.onboardingEmailStatus + 1) % 3) });
  }

  onAddToDlsAndPdOrgStatusChange = (event) => {
    this.setState({ addToDlsAndPdOrgStatus: ((this.state.addToDlsAndPdOrgStatus + 1) % 3) });
  }

onSubmitClick = (event) => {console.log('Submit')}
  render() {
    const { columns } = this.props;
    return (
      <div className="tableContainer" style={{  maxWidth: '100%' }}>
        <Modal
          open={this.state.filterModalOpen}
          onClose={this.onModalClose}
        >
          <Paper className="editWidget">
            <Grid container space={40} className="gridContainer">
              <Grid item xs={8} className="gridItem">
                <Grid container space={20} >
                  <Grid item xs={12} className="gridItem">
                    <div className="headerText">Hire Data</div>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Last Name" value={this.state.lastName} onChange={this.onLastNameEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="First Name" value={this.state.firstName} onChange={this.onFirstNameEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="Date Entered"
                      type="date"
                      value={this.state.DateEntered}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onDateEntered}
                      required={true}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Regional Location" value={this.state.regionalLocation} onChange={this.onRegionalLocationEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="CWID" value={this.state.cwid} onChange={this.onCWIDEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="gender-selector" required>Gender</InputLabel>
                      <Select
                        value={this.state.gender}
                        onChange={this.onGenderSelect}
                        input={<Input id="gender-selector" />}
                        required
                      >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="hireType-selector" required>Hire Type</InputLabel>
                      <Select
                        value={this.state.hireType}
                        onChange={this.onHireTypeSelect}
                        input={<Input id="hireType-selector" />}
                        required
                      >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="direct">Direct</MenuItem>
                        <MenuItem value="contract">Contract</MenuItem>
                        <MenuItem value="sow">SOW</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="PD Start Date"
                      type="date"
                      value={this.state.pdStartDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onPdStartDatePick}
                      required={true}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Vendor" value={this.state.vendor} onChange={this.onVendorEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Role" value={this.state.role} onChange={this.onRoleEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="plic-selector">PL/IC</InputLabel>
                      <Select
                        value={this.state.plic}
                        onChange={this.onPLICSelect}
                        input={<Input id="plic-selector" />}
                        required
                      >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="direct">PL</MenuItem>
                        <MenuItem value="contract">IC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Team Name" value={this.state.teamName} onChange={this.onTeamNameEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Platform" value={this.state.platform} onChange={this.onPlatformEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Manager" value={this.state.manager} onChange={this.onManagerEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="hireStatus-selector" required>Hire Status</InputLabel>
                      <Select
                        value={this.state.hireStatus}
                        onChange={this.onHireStatusSelect}
                        input={<Input id="hireStatus-selector" />}
                        required
                      >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="new">New</MenuItem>
                        <MenuItem value="rehire">Rehire</MenuItem>
                        <MenuItem value="transfer">Transfer</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Onboarding Buddy" value={this.state.onboardingBuddy} onChange={this.onOnboardingBuddyEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="computerNeeds-selector" required>Computer Needs</InputLabel>
                      <Select
                        value={this.state.computerNeeds}
                        onChange={this.onComputerNeedsSelect}
                        input={<Input id="computerNeeds-selector" />}
                      >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="new">Macbook</MenuItem>
                        <MenuItem value="rehire">Lenovo</MenuItem>
                        <MenuItem value="transfer">Mondesk</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="SEAT Number" value={this.state.seatNum} onChange={this.onSeatNumEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Onboarding Campus" value={this.state.onboardingCampus} onChange={this.onOnboardingCampusEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Manager Comments" value={this.state.managerComments} onChange={this.onManagerCommentsEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="NEID/EID" value={this.state.neid} onChange={this.onNEIDEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="New Hire/Rehire Ticket" value={this.state.newHireRehireTicket} onChange={this.onNewHireRehireTicketEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="Hire Ticket Entered"
                      type="date"
                      value={this.state.dateEnteredHire}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onDateEnteredHireDatePick}
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="MAC Ticket" value={this.state.macTicket} onChange={this.onMacTicketEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="MAC Ticket Entered"
                      type="date"
                      value={this.state.dateEnteredMacTicket}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onDateEnteredMacTicketDatePick}
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="Laptop Delivered"
                      type="date"
                      value={this.state.dateLaptopDelivered}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onDateLaptopDeliveredDatePick}
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="Onboarding Buddy Email Sent"
                      type="date"
                      value={this.state.onboardingBuddyEmailSent}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onOnboardingBuddyEmailSentDatePick}
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="Add to DLs/PD Org"
                      type="date"
                      value={this.state.addToDlsAndPdOrg}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onAddToDlsAndPdOrgDatePick}
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      label="Welcome Email Sent"
                      type="date"
                      value={this.state.welcomeEmailSent}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.onWelcomeEmailSentDatePick}
                      required={false}
                    />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Admin Name" value={this.state.adminName} onChange={this.onAdminEnter} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} className="noScroll">
                <Grid container space={20} className="gridContainer">
                  <Grid item xs={3} className="noScroll">
                    <div className="headerText">Progress</div>
                  </Grid>
                  <Grid item xs={3} className="noScroll">
                    <List className="progress-list">
                      <ListItem>
                        <ListItemText primary="Hire Ticket Submitted" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="MAC Ticket Submitted" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Laptop Delivered" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Onboarding Email Sent" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Added to DLs/PD Org" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={1} className="noScroll-icons">
                  <List className="progress-list">
                      <ListItem>
                        <ListItemIcon className="step-icon" onClick={this.onHireStatusChange}>
                          {(this.state.hireTicketStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.hireTicketStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.hireTicketStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon className="step-icon" onClick={this.onMACTicketStatusChange}>
                          {(this.state.macTicketStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.macTicketStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.macTicketStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon className="step-icon" onClick={this.onLaptopDeliveredStatusChange}>
                          {(this.state.laptopDeliveredStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.laptopDeliveredStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.laptopDeliveredStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon className="step-icon" onClick={this.onOnboardingEmailStatusChange}>
                          {(this.state.onboardingEmailStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.onboardingEmailStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.onboardingEmailStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon className="step-icon" onClick={this.onAddToDlsAndPdOrgStatusChange}>
                          {(this.state.addToDlsAndPdOrgStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.addToDlsAndPdOrgStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.addToDlsAndPdOrgStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Modal>
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
                    headerStyle: {minWidth: '12.75vw'}, 
                    cellStyle: {minWidth: '12.75vw'}
                },
                {
                    title: 'Regional Location',
                    field: 'regionalLocation',
                    headerStyle: {minWidth: '12.75vw'}, 
                    cellStyle: {minWidth: '12.75vw'}
                },
                {
                    title: 'CWID',
                    field: 'cwid',
                    headerStyle: {minWidth: '12.75vw'}, 
                    cellStyle: {minWidth: '12.75vw'}
                },
                {
                    title: 'Steps Completed',
                    field: 'numStepsComplete',
                    headerStyle: {minWidth: '12.75vw'}, 
                    cellStyle: {minWidth: '12.75vw'}
                }
              ]
          }
          onRowClick={(event, rowData) => this.setState({  
            lastName: rowData.lastName,
            firstName: rowData.firstName,    
            hireDate: rowData.hireDate,
            regionalLocation: rowData.regionalLocation,
            gender: rowData.gender,
            hireType: rowData.hireType,
            pdStartDate: rowData.pdStartDate,
            role: rowData.role,
            teamName: rowData.teamName,
            platform: rowData.platform,
            manager: rowData.manager,
            hireStatus: rowData.hireStatus,
            computerNeeds: rowData.computerNeeds,
            onboardingCampus: rowData.onboardingCampus,
            onboardingBuddy: rowData.onboardingBuddy,
            adminName: rowData.adminName,
            cwid: rowData.cwid,
            vendor: rowData.vendor,
            plic: rowData.plic,
            seatNum: rowData.seatNum,
            neid: rowData.neid,
            newHireRehireTicket: rowData.newHireRehireTicket,
            macTicket: rowData.macTicket,
            managerComments: rowData.managerComments,
            dateEnteredHire: rowData.dateEnteredHire,
            dateEnteredMacTicket: rowData.dateEnteredMacTicket,
            dateLaptopDelivered: rowData.dateLaptopDelivered,
            onboardingBuddyEmailSent: rowData.onboardingBuddyEmailSent,
            addToDlsAndPdOrg: rowData.addToDlsAndPdOrg,
            welcomeEmailSent: rowData.welcomeEmailSent,
            hireTicketStatus: rowData.hireTicketStatus,
            macTicketStatus: rowData.macTicketStatus,
            laptopDeliveredStatus: rowData.macTicketStatus,
            onboardingEmailStatus: rowData.onboardingEmailStatus,
            addToDlsAndPdOrgStatus: rowData.addToDlsAndPdOrgStatus
          },
            () => this.onModalOpen(rowData))}
          data={displayData}
          options={{
            search: false,
            paging: false,
            pageSize: 1,
            maxBodyHeight: '58vh',
            toolbar: false
          }}
          title="Demo Title"
        />
      </div>
    );
  }
}

export default searchResults;