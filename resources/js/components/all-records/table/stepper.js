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
        width: 120,
        flexGrow: 1.0,
        label: 'Name',
        dataKey: 'dessert',
    },
  ]

  var columnsBase = [    
    {
        width: 120,
        label: 'Date Entered',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Regional Location',
        dataKey: 'fat',
        numeric: true,
    },
    {
        width: 120,
        label: 'CWID',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 120,
        label: 'Gender',
        dataKey: 'protein',
        numeric: true,
    },
    {
        width: 120,
        label: 'Hire Type',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'PD Start Date',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Vendor',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Role',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'PL/IC',
        dataKey: 'fat',
        numeric: true,
    },
    {
        width: 120,
        label: 'Team Name',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 120,
        label: 'Platform',
        dataKey: 'protein',
        numeric: true,
    },
    {
        width: 120,
        label: 'Manager',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Hire Status',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Onboarding Buddy',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Computer Needs',
        dataKey: 'fat',
        numeric: true,
    },
    {
        width: 120,
        label: 'SEAT Number Assigned',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 120,
        label: 'Campus',
        dataKey: 'protein',
        numeric: true,
    },
    {
        width: 120,
        label: 'Manager Comments',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'NEID / EID',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'New Hire / Re Hire',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 120,
        label: '(Date Entered)',
        dataKey: 'protein',
        numeric: true,
    },
    {
        width: 120,
        label: 'MAC Ticket',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: '(Date Entered)',
        dataKey: 'calories',
        numeric: true,
    },  
    {
        width: 120,
        label: 'Date Laptop Delivered',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 120,
        label: 'Onboarding Buddy Email Sent',
        dataKey: 'protein',
        numeric: true,
    },
    {
        width: 120,
        label: 'Add to DLs and PD Org',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Welcome Email Sent',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Admin Name',
        dataKey: 'calories',
        numeric: true,
    },
]

function updateColumns(page, count, columnsPerPage) {
    columns = [];
    columns = [
        {
            width: 120,
            flexGrow: 1.0,
            label: 'Name',
            dataKey: 'dessert',
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
        this.state = {page: 0, count: 28, columnsPerPage: 8, garbage: 0};
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