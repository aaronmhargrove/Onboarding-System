/*
* Author: Matthew Chaplin
* Bayer Onboarding
* Date: 4/6/19
*/

import React from 'react';
import StepperTable from './steppertable';
import StepperTableToolbar from './steppertabletoolbar';

import './stepper.css';

//Prototype data
const data = [
    ['Winky, Tinky', 159, 6.0, 24, 4.0],
    ['Buchanan, Daisy', 237, 9.0, 37, 4.3],
    ['Scrute, Dwight', 262, 16.0, 24, 6.0],
    ['Molina, Yadier', 305, 3.7, 67, 4.3],
    ['Franklin, Benjamin', 356, 16.0, 49, 3.9],
  ];
  
  let id = 0;
  function createData(dessert, calories, fat, carbs, protein) {
    id += 1;
    return { id, dessert, calories, fat, carbs, protein };
  }
  
  const rows = [];
  
  for (let i = 0; i < 200; i += 1) {
    const randomSelection = data[Math.floor(Math.random() * data.length)];
    rows.push(createData(...randomSelection));
  }

//Keeper Code Begins here
  var columns = [
    {         
        title: 'Name',
        field: 'name'
    },
  ]

  var columnsBase = [    
    {
        title: 'Date Entered',
        field: 'dateEntered',
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
        field: 'seatNumberAssigned'
    },
    {
        title: 'Campus',
        field: 'campus'
    },
    {
        title: 'Manager Comments',
        field: 'managerComments'
    },
    {
        title: 'NEID/EID',
        field: 'neidEid',
        type: 'numeric'
    },
    {
        title: 'New Hire/Re Hire',
        field: 'newHireReHire'
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

function updateColumns(page, count, columnsPerPage) {
    columns = [];
    columns = [
        {           
            title: 'Name',
            field: 'name',
        },
      ]

      console.log(count);

      for (let i = (page * columnsPerPage); (i < ((page * columnsPerPage) + columnsPerPage)) && (i < count); i++)
      {
          console.log("Page: ");
          console.log(page);
          columns.push(columnsBase[i]);
          console.log(columns);
      }
}

class Stepper extends React.Component {
    constructor(props){
        super(props);
        this.state = {page: 0, count: 28, columnsPerPage: 7, garbage: 0};
        updateColumns(this.state.page, this.state.count, this.state.columnsPerPage);
    }      

    handleFirstPageButtonClick = event => {
        this.setState({ page: 0 }, () => {
            console.log(this.state.page);
            updateColumns(this.state.page, this.state.count, this.state.columnsPerPage);            
            this.setState({garbage: 1})
        });
      };
    
      handleBackButtonClick = event => {
        this.setState({ page: this.state.page - 1}, () => {
            console.log(this.state.page);
            updateColumns(this.state.page, this.state.count, this.state.columnsPerPage);                 
            this.setState({garbage: 2})   
        });     
      };
    
      handleNextButtonClick = event => {
        console.log(this.state.page);
        this.setState({ page: this.state.page + 1}, () => {
            console.log(this.state.page);
            updateColumns(this.state.page, this.state.count, this.state.columnsPerPage);                
            this.setState({garbage: 3})
        });
      };
    
      handleLastPageButtonClick = event => {
        this.setState({
          page : Math.max(0, Math.ceil(this.state.count / this.state.columnsPerPage) - 1)
        }, () => {
            console.log(this.state.page);               
            updateColumns(this.state.page, this.state.count, this.state.columnsPerPage);      
            this.setState({garbage: 4})
        });
      }

    render() {
        return(
            <div className="stepper">
                <div style={{ height: '60vh', width: '100%' }}>
                    <StepperTable
                            theme="default"
                            rowCount={rows.length}
                            rowGetter={({ index }) => rows[index]}
                            onRowClick={event => console.log(event)}                            
                            columns={columns}
                            page={this.state.page}
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