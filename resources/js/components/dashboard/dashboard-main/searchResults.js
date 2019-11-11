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
import axios from 'axios';
import { getCurrentUser, currentUser } from '../../../global'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withSnackbar } from 'notistack';

import './searchResults.css';

var displayData = [];

class searchResults extends React.Component {
  constructor(props) {
    super(props);
    this.calcNumStepsComplete = this.calcNumStepsComplete.bind(this);
    displayData = [];

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
          hireId: hire.id,
          numStepsComplete: this.calcNumStepsComplete(hire.hire_steps)
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

  calcNumStepsComplete(hire_steps) {
    let numStepsComplete = 0;
    for (let i = 0; i < hire_steps.length; i++){
      if(hire_steps[i].status == 2) {
        numStepsComplete++;
      }
    }
    return numStepsComplete;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isHighlightChecked != state.isHighlightChecked) {
        return {
            isHighlightChecked: props.isHighlightChecked,
        };
    }
    return null;
}

  onModalClose = () => {
    var fieldError = false;
    // Validation of required fields
    if(!this.state.firstName){
        fieldError = true;
        this.props.enqueueSnackbar("'First Name' is required", {
            variant: 'warning',
            autoHideDuration: 3000
        });
    }
    if(!this.state.lastName){
        fieldError = true;
        this.props.enqueueSnackbar("'Last Name' is required", {
            variant: 'warning',
            autoHideDuration: 3000
        });
    }
    if(!this.state.hireType){
        fieldError = true;
        this.props.enqueueSnackbar("'Hire Type' is required", {
            variant: 'warning',
            autoHideDuration: 3000
        });
    }
    if(!this.state.pdStartDate){
        fieldError = true;
        this.props.enqueueSnackbar("'Start Date' is required", {
            variant: 'warning',
            autoHideDuration: 3000
        });
    }
    if(!this.state.manager_id){
        fieldError = true;
        this.props.enqueueSnackbar("'Manager' is required", {
            variant: 'warning',
            autoHideDuration: 3000
        });
    }
    if(!this.state.platform){
      fieldError = true;
      this.props.enqueueSnackbar("'Platform' is required", {
          variant: 'warning',
          autoHideDuration: 3000
      });
    }

    // All of these API calls need combined so we can do a single load.
    if(!this.state.unlocked && !this.state.modalLoading) {
      var hire = null

      this.props.data.forEach(data => {
        if (data.id == this.state.hireId) {
          hire = data
        }
      })
      
      if(!fieldError){
        var changedHireSteps = [];

        if(this.state.adminAssignedStatusChanged || this.state.cwidAssignedStatusChanged || this.state.neidAssignedStatusChanged ||
          this.state.hireTicketStatusChanged || this.state.macTicketStatusChanged || this.state.laptopDeliveredStatusChanged ||
          this.state.onboardingEmailStatusChanged || this.state.addToDlsAndPdOrgStatusChanged || this.state.welcomeEmailSentStatusChanged) {
          if (this.state.adminAssignedStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[0].id,
              status: this.state.adminAssignedStatus
            });
          }
          if (this.state.cwidAssignedStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[1].id,
              status: this.state.cwidAssignedStatus
            });
          }
          if (this.state.neidAssignedStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[2].id,
              status: this.state.neidAssignedStatus
            });
          }
          if (this.state.hireTicketStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[3].id,
              status: this.state.hireTicketStatus
            });
          }
          if (this.state.macTicketStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[4].id,
              status: this.state.macTicketStatus
            });
          }
          if (this.state.laptopDeliveredStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[5].id,
              status: this.state.laptopDeliveredStatus
            });
          }
          if (this.state.onboardingEmailStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[6].id,
              status: this.state.onboardingEmailStatus
            });
          }
          if (this.state.addToDlsAndPdOrgStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[7].id,
              status: this.state.addToDlsAndPdOrgStatus
            });
          }
          if (this.state.welcomeEmailSentStatusChanged) {
            changedHireSteps.push({
              id: hire.hire_steps[8].id,
              status: this.state.welcomeEmailSentStatus
            });
          }
        }

        if(this.state.startDateChanged) {
          axios.patch('hires/' + this.state.hireId,             
          {
            "admin_id": this.state.admin_id != "" ? this.state.admin_id : null,
            "regional_location": this.state.regionalLocation != "" ? this.state.regionalLocation : null,
            "first_name": this.state.firstName != "" ? this.state.firstName : null,
            "last_name": this.state.lastName != "" ? this.state.lastName : null,
            "cwid": this.state.cwid != "" ? this.state.cwid : null,
            "gender": this.state.gender != "" ? this.state.gender : null,
            "hire_type": this.state.hireType != "" ? this.state.hireType : null,
            "start_date": this.state.startDateChanged ? this.state.pdStartDate : null,
            "vendor": this.state.vendor != "" ? this.state.vendor : null,
            "role": this.state.role != "" ? this.state.role : null,
            "pl_ic": this.state.plic != "" ? this.state.plic : null,
            "team_name": this.state.teamName != "" ? this.state.teamName : null,
            "platform": this.state.platform != "" ? this.state.platform : null,
            "manager_id": this.state.manager_id != "" ? this.state.manager_id : null,
            "hire_status": this.state.hireStatus != "" ? this.state.hireStatus : null,
            "onboarding_buddy": this.state.onboardingBuddy != "" ? this.state.onboardingBuddy : null,
            "computer_needs": this.state.computerNeeds != "" ? this.state.computerNeeds : null,
            "seat_number": this.state.seatNum != "" ? this.state.seatNum : null,
            "campus": this.state.onboardingCampus != "" ? this.state.onboardingCampus : null,
            "neid": this.state.neid != "" ? parseInt(this.state.neid) : null,
            "hire_ticket": this.state.newHireRehireTicket != "" ? this.state.newHireRehireTicket : null,
            "mac_ticket": this.state.macTicket != "" ? this.state.macTicket : null,
            "hire_steps": changedHireSteps,
          },
          {
            headers: {
                'content-type': 'application/json',
            }
          })
          .then(response => {
            this.props.enqueueSnackbar("Hire updated!", { // Success Message
              variant: 'success',
              autoHideDuration: 2000
            });
          })
          .catch(response => {
            if (response.response.status == 422){ // Validation error
              var fieldIssues = response.response.data.errors;
              var issueKeys = Object.keys(fieldIssues);
              issueKeys.forEach(key => {
                  var issueArray = fieldIssues[key];
                  issueArray.forEach(element => {
                      this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                          variant: 'error',
                          autoHideDuration: 5000
                      });
                  });
              });
            }
            else{ // Generic laravel error
                this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                    variant: 'error',
                    autoHideDuration: 10000
                });
            }
          });
        }
        else {
          axios.patch('hires/' + this.state.hireId,             
          {
            "admin_id": this.state.admin_id != "" ? this.state.admin_id : null,
            "regional_location": this.state.regionalLocation != "" ? this.state.regionalLocation : null,
            "first_name": this.state.firstName != "" ? this.state.firstName : null,
            "last_name": this.state.lastName != "" ? this.state.lastName : null,
            "cwid": this.state.cwid != "" ? this.state.cwid : null,
            "gender": this.state.gender != "" ? this.state.gender : null,
            "hire_type": this.state.hireType != "" ? this.state.hireType : null,
            "vendor": this.state.vendor != "" ? this.state.vendor : null,
            "role": this.state.role != "" ? this.state.role : null,
            "pl_ic": this.state.plic != "" ? this.state.plic : null,
            "team_name": this.state.teamName != "" ? this.state.teamName : null,
            "platform": this.state.platform != "" ? this.state.platform : null,
            "manager_id": this.state.manager_id != "" ? this.state.manager_id : null,
            "hire_status": this.state.hireStatus != "" ? this.state.hireStatus : null,
            "onboarding_buddy": this.state.onboardingBuddy != "" ? this.state.onboardingBuddy : null,
            "computer_needs": this.state.computerNeeds != "" ? this.state.computerNeeds : null,
            "seat_number": this.state.seatNum != "" ? this.state.seatNum : null,
            "campus": this.state.onboardingCampus != "" ? this.state.onboardingCampus : null,
            "neid": this.state.neid != "" ? parseInt(this.state.neid) : null,
            "hire_ticket": this.state.newHireRehireTicket != "" ? this.state.newHireRehireTicket : null,
            "mac_ticket": this.state.macTicket != "" ? this.state.macTicket : null,
            "hire_steps": changedHireSteps,
          },
          {
            headers: {
                'content-type': 'application/json',
            }
          })
          .then(response => {
            this.props.enqueueSnackbar("Hire updated!", { // Success Message
              variant: 'success',
              autoHideDuration: 2000
            });
          })
          .catch(response => {
            if (response.response.status == 422){ // Validation error
              var fieldIssues = response.response.data.errors;
              var issueKeys = Object.keys(fieldIssues);
              issueKeys.forEach(key => {
                  var issueArray = fieldIssues[key];
                  issueArray.forEach(element => {
                      this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                          variant: 'error',
                          autoHideDuration: 5000
                      });
                  });
              });
            }
            else{ // Generic laravel error
                this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                    variant: 'error',
                    autoHideDuration: 10000
                });
            }
          });
        }
  
        axios.patch('/hires/' + this.state.hireId + '/unlock')
        .then(response => {
          this.setState({modalLoading: false});
          this.props.enqueueSnackbar("Hire unlocked successfully!", { // Success Message
            variant: 'success',
            autoHideDuration: 2000
          });
        })
        .catch(response => {
          if (response.response.status == 422){ // Validation error
            var fieldIssues = response.response.data.errors;
            var issueKeys = Object.keys(fieldIssues);
            issueKeys.forEach(key => {
                var issueArray = fieldIssues[key];
                issueArray.forEach(element => {
                    this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                        variant: 'error',
                        autoHideDuration: 5000
                    });
                });
            });
          }
          else{ // Generic laravel error
              this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
                  variant: 'error',
                  autoHideDuration: 10000
              });
          }
          this.setState({modalLoading: false});
        });
  
        this.setState({
          filterModalOpen: false,
        });
  
        this.props.setReload();
      }
    }
    else {
      this.setState({
        filterModalOpen: false,
      });
    }

  }

  onModalOpen = (rowData) => {
    this.setState({
      filterModalOpen: true,
      modalLoading: true
    });

    axios.patch('/hires/' + this.state.hireId + '/lock')
    .then(response => {
      if(response.data.success) {
        this.setState({modalLoading: false, unlocked: false});
        this.props.enqueueSnackbar("Hire successfully locked!", { // Success Message
          variant: 'success',
          autoHideDuration: 2000
        });
      }
      else {
        this.setState({modalLoading: false, unlocked: true});
        this.props.enqueueSnackbar("Hire is already locked - cannot be edited right now.", { // Success Message
          variant: 'warning',
          autoHideDuration: 2000
        });
      }
    })
    .catch(response => {
      this.setState({modalLoading: false});
      if (response.response.status == 422){ // Validation error
        var fieldIssues = response.response.data.errors;
        var issueKeys = Object.keys(fieldIssues);
        issueKeys.forEach(key => {
            var issueArray = fieldIssues[key];
            issueArray.forEach(element => {
                this.props.enqueueSnackbar(element, { // Display what was wrong with fields
                    variant: 'error',
                    autoHideDuration: 5000
                });
            });
        });
      }
      else{ // Generic laravel error
          this.props.enqueueSnackbar("Oops! Something went wrong! " + response.response.data.message, {
              variant: 'error',
              autoHideDuration: 10000
          });
      }
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
    this.setState({pdStartDate: event.target.value, startDateChanged: true});
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
    this.setState({manager_id: event.target.value});
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
    this.setState({admin_id: event.target.value});
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

  onAdminAssignedStatusChange = (event) => {
    this.setState({ adminAssignedStatus: ((this.state.adminAssignedStatus + 1) % 3), adminAssignedStatusChanged: true });
  }

  onCWIDAssignedStatusChange = (event) => {
    this.setState({ cwidAssignedStatus: ((this.state.cwidAssignedStatus + 1) % 3), cwidAssignedStatusChanged: true });
  }

  onNEIDAssignedStatusChange = (event) => {
    this.setState({ neidAssignedStatus: ((this.state.neidAssignedStatus + 1) % 3), neidAssignedStatusChanged: true });
  }

  onHireStatusChange = (event) => {
    this.setState({ hireTicketStatus: ((this.state.hireTicketStatus + 1) % 3), hireTicketStatusChanged: true });
  }

  onMACTicketStatusChange = (event) => {
    this.setState({ macTicketStatus: ((this.state.macTicketStatus + 1) % 3), macTicketStatusChanged: true });
  }

  onLaptopDeliveredStatusChange = (event) => {
    this.setState({ laptopDeliveredStatus: ((this.state.laptopDeliveredStatus + 1) % 3), laptopDeliveredStatusChanged: true });
  }

  onOnboardingEmailStatusChange = (event) => {
    this.setState({ onboardingEmailStatus: ((this.state.onboardingEmailStatus + 1) % 3), onboardingEmailStatusChanged: true });
  }

  onAddToDlsAndPdOrgStatusChange = (event) => {
    this.setState({ addToDlsAndPdOrgStatus: ((this.state.addToDlsAndPdOrgStatus + 1) % 3), addToDlsAndPdOrgStatusChanged: true });
  }

  onWelcomeEmailStatusChange = (event) => {
    this.setState({ welcomeEmailSentStatus: ((this.state.welcomeEmailSentStatus +1) % 3), welcomeEmailSentStatusChanged: true});
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
            {this.state.modalLoading ? <div className="loadingSpinner"><CircularProgress size="5rem"/></div> : 
              <Grid container space={40} className="gridContainer">
              <Grid item xs={8} className="gridItem">
                <Grid container space={20} >
                  <Grid item xs={12} className="gridItem">
                    <div className="headerText">Hire Data</div>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Last Name" disabled={this.state.unlocked} value={this.state.lastName} onChange={this.onLastNameEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="First Name" disabled={this.state.unlocked} value={this.state.firstName} onChange={this.onFirstNameEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="Regional Location" disabled={this.state.unlocked} value={this.state.regionalLocation} onChange={this.onRegionalLocationEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField label="CWID" disabled={this.state.unlocked} value={this.state.cwid} onChange={this.onCWIDEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="gender-selector" required>Gender</InputLabel>
                      <Select
                        value={this.state.gender}
                        onChange={this.onGenderSelect}
                        input={<Input id="gender-selector" />}
                        required
                        disabled={this.state.unlocked}
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
                        disabled={this.state.unlocked}
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
                      disabled={this.state.unlocked}
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
                    <TextField disabled={this.state.unlocked} label="Vendor" value={this.state.vendor} onChange={this.onVendorEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField disabled={this.state.unlocked} label="Role" value={this.state.role} onChange={this.onRoleEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="plic-selector">PL/IC</InputLabel>
                      <Select
                        disabled={this.state.unlocked}
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
                    <TextField disabled={this.state.unlocked} label="Team Name" value={this.state.teamName} onChange={this.onTeamNameEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField disabled={this.state.unlocked} label="Platform" value={this.state.platform} onChange={this.onPlatformEnter} required />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                        <InputLabel htmlFor="manager-selector" required>Manager</InputLabel>
                        <Select 
                        disabled={this.state.unlocked}
                        value={this.state.manager_id} 
                        onChange={this.onManagerEnter} 
                        input={<Input id="manager-selector" />}
                        required
                        >
                            {this.props.users.map(user => {
                              return <MenuItem value={user.id}>{user.name}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="hireStatus-selector" required>Hire Status</InputLabel>
                      <Select
                        disabled={this.state.unlocked}
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
                    <TextField disabled={this.state.unlocked} label="Onboarding Buddy" value={this.state.onboardingBuddy} onChange={this.onOnboardingBuddyEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <FormControl>
                      <InputLabel htmlFor="computerNeeds-selector" required>Computer Needs</InputLabel>
                      <Select
                        disabled={this.state.unlocked}
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
                    <TextField disabled={this.state.unlocked} label="SEAT Number" value={this.state.seatNum} onChange={this.onSeatNumberEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField disabled={this.state.unlocked} label="Onboarding Campus" value={this.state.onboardingCampus} onChange={this.onOnboardingCampusEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField disabled={this.state.unlocked} label="Manager Comments" value={this.state.managerComments} onChange={this.onManagerCommentsEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField disabled={this.state.unlocked} label="NEID/EID" value={this.state.neid} onChange={this.onNEIDEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField disabled={this.state.unlocked} label="New Hire/Rehire Ticket" value={this.state.newHireRehireTicket} onChange={this.onNewHireRehireTicketEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      disabled={this.state.unlocked}
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
                    <TextField disabled={this.state.unlocked} label="MAC Ticket" value={this.state.macTicket} onChange={this.onMacTicketEnter} />
                  </Grid>
                  <Grid item xs={6} className="gridItem">
                    <TextField
                      disabled={this.state.unlocked}
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
                      disabled={this.state.unlocked}
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
                      disabled={this.state.unlocked}
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
                      disabled={this.state.unlocked}
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
                      disabled={this.state.unlocked}
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
                    <FormControl>
                      <InputLabel htmlFor="admin-selector" required>Admin</InputLabel>
                      <Select 
                      disabled={this.state.unlocked}
                      value={this.state.admin_id} 
                      onChange={this.onAdminEnter} 
                      input={<Input id="admin-selector" />}
                      required
                      >
                          {this.props.users.map(user => {
                              return <MenuItem value={user.id}>{user.name}</MenuItem>;
                          })}
                      </Select>
                    </FormControl>
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
                        {(this.state.unlocked == false) && <ListItemText primary="Admin Assigned" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="Admin Assigned" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="CWID Assigned" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="CWID Assigned" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="NEID Assigned" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="NEID Assigned" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="Hire Ticket Submitted" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="Hire Ticket Submitted" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="MAC Ticket Submitted" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="MAC Ticket Submitted" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="Laptop Delivered" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="Laptop Delivered" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="Onboarding Email Sent" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="Onboarding Email Sent" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="Added to DLs/PD Org" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="Added to DLs/PD Org" />}
                      </ListItem>
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemText primary="Welcome Email Sent" />}
                        {(this.state.unlocked == true) && <ListItemText className="disabled" primary="Welcome Email Sent" />}
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={1} className="noScroll-icons">
                  <List className="progress-list">
                      <ListItem>
                        {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onAdminAssignedStatusChange}>
                          {(this.state.adminAssignedStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.adminAssignedStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.adminAssignedStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.adminAssignedStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.adminAssignedStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.adminAssignedStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onCWIDAssignedStatusChange}>
                          {(this.state.cwidAssignedStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.cwidAssignedStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.cwidAssignedStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.cwidAssignedStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.cwidAssignedStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.cwidAssignedStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onNEIDAssignedStatusChange}>
                          {(this.state.neidAssignedStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.neidAssignedStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.neidAssignedStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.neidAssignedStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.neidAssignedStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.neidAssignedStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onHireStatusChange}>
                          {(this.state.hireTicketStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.hireTicketStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.hireTicketStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.hireTicketStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.hireTicketStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.hireTicketStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onMACTicketStatusChange}>
                          {(this.state.macTicketStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.macTicketStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.macTicketStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.macTicketStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.macTicketStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.macTicketStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onLaptopDeliveredStatusChange}>
                          {(this.state.laptopDeliveredStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.laptopDeliveredStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.laptopDeliveredStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.laptopDeliveredStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.laptopDeliveredStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.laptopDeliveredStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onOnboardingEmailStatusChange}>
                          {(this.state.onboardingEmailStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.onboardingEmailStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.onboardingEmailStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.onboardingEmailStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.onboardingEmailStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.onboardingEmailStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onAddToDlsAndPdOrgStatusChange}>
                          {(this.state.addToDlsAndPdOrgStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.addToDlsAndPdOrgStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.addToDlsAndPdOrgStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.addToDlsAndPdOrgStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.addToDlsAndPdOrgStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.addToDlsAndPdOrgStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                      <ListItem>
                      {(this.state.unlocked == false) && <ListItemIcon className="step-icon" onClick={this.onWelcomeEmailStatusChange}>
                          {(this.state.welcomeEmailSentStatus == 0) && <Clear className="incomplete-icon" />}
                          {(this.state.welcomeEmailSentStatus == 1) && <HourglassEmpty className="in-progress-icon" />}
                          {(this.state.welcomeEmailSentStatus == 2) && <Done className="complete-icon" />}
                        </ListItemIcon>}
                        {(this.state.unlocked == true) && <ListItemIcon>
                          {(this.state.welcomeEmailSentStatus == 0) && <Clear className="incomplete-icon-locked" />}
                          {(this.state.welcomeEmailSentStatus == 1) && <HourglassEmpty className="in-progress-icon-locked" />}
                          {(this.state.welcomeEmailSentStatus == 2) && <Done className="complete-icon-locked" />}
                        </ListItemIcon>}
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            }
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
            hireId: rowData.hireId,
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
            admin_id: rowData.admin_id,
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
            adminAssignedStatus: rowData.adminAssignedStatus,
            cwidAssignedStatus: rowData.cwidAssignedStatus,
            neidAssignedStatus: rowData.neidAssignedStatus,
            hireTicketStatus: rowData.hireTicketStatus,
            macTicketStatus: rowData.macTicketStatus,
            laptopDeliveredStatus: rowData.laptopDeliveredStatus,
            onboardingEmailStatus: rowData.onboardingEmailStatus,
            addToDlsAndPdOrgStatus: rowData.addToDlsAndPdOrgStatus,
            welcomeEmailSentStatus: rowData.welcomeEmailSentStatus,
            manager_id: rowData.manager_id,
            startDateChanged: false,
          },
            () =>{              
              // console.log("admin_id", rowData.admin_id);
              // console.log("manager_id", rowData.manager_id)
              // console.log("current_user_id", currentUser.data.id) 
              this.onModalOpen(rowData)})}
          data={displayData}
          options={{
            //thirdSortClick = false,
            search: false,
            paging: false,
            pageSize: 1,
            maxBodyHeight: '70vh',
            toolbar: false,
            rowStyle: rowData => {
              if (((rowData.admin_id == currentUser.id) || (rowData.manager_id == currentUser.id)) && (this.state.isHighlightChecked)) {
                return { backgroundColor: '#d6f8d6' };
              }
            }
          }}
          title="Demo Title"
        />
      </div>
    );
  }
}

export default withSnackbar(searchResults);