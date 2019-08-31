import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


import './expandedView.css';
import { Divider, Hidden } from '@material-ui/core';

class Employee{

  constructor(lastName,firstName,EmployeeID,location,gender)
  {
    this.lastName = " temp";
    this.firstName = "temp ";
    this.EmployeeID= " 12335";
    this.location = "St. Louis";
    this.gender = " M ";
    
  }

}

const greenStyle = {
  
  border: '3px solid green'
};
const redStyle = {
  border: '3px solid red'
 
};

const dialogStyle=
{
  overflow:'hidden'
};




function FillRow(props)
{
  console.log("gg");
  console.log(props);
return(
 
        <React.Fragment>
            <TableCell> {props.E.lastName}</TableCell>
            <TableCell>{props.E.firstName}</TableCell>
            <TableCell>{props.E.location}</TableCell>
            <TableCell>{props.E.EmployeeID}</TableCell>
            <StepsComp E={props.E}/>
            </React.Fragment>      

)
  
}
//  E: new Employee("F","J","e","f","F"),




function Step(props)
{
  var style;
  var word;
  if(props.num ==1)
  {
   style = greenStyle;
    word="Completed";

  }
  if(props.num ==0)
  {
    style=redStyle;
    word = "Not Completed";
  }

  return(
    <React.Fragment>
        <TableRow style={style}>
            <TableCell>Step {props.step}: </TableCell>       
            <TableCell> {word}</TableCell>
        </TableRow>
    </React.Fragment>
  )
}

function EmpDataRow(props)
{
  return( <React.Fragment>

    <TableRow>
      <TableCell>{props.data}:</TableCell>
      <TableCell>{props.info}</TableCell>
    </TableRow>
    </React.Fragment>)
}

function StepsComp(props)
{
  var num =0;
  for(var i =0; i<7;++i)
  {
    if(props.E.completed[i] ==1)
    {num ++;}
  }
  return( <TableCell>{num +"/7"}</TableCell>)
}



class ExpandedView extends React.Component {

  constructor(props)
  {
      super(props);
    const{
        E
      } = props;
     
      this.state =
      {
          open:false,
      };
  }



    handleClose = () => {
        this.setState({ open: false });
      };
      handleClickOpen = () => {
        this.setState({ open: true });
        console.log("closed");
      };

  
    render() {
      console.log("rendered");

        return (
        
          <React.Fragment>
         
         
         <TableRow hover={true} onClick={this.handleClickOpen}>
         <FillRow  E={this.props.E}/>
         </TableRow>
          
          
             <div class="popup"> 
            <Dialog
           
              open = {this.state.open}
              onClose = {this.handleClose}
              aria-labelledby="form-dialog-title"
              scroll="paper" 
              fullWidth={true}
              disableActionSpacing={true}
              style={dialogStyle}
              

            >
       
            <DialogTitle >{this.props.E.firstName} {this.props.E.lastName} </DialogTitle>
            
            
            <DialogContent>
            
           
            {/* <Paper id="leftPaper" > */}
            <div id="outerdiv">
            
            <div id="leftdiv">
                <Table>
                
                  <TableBody>
                    <EmpDataRow data={"Location"} info={this.props.E.location}/>
                    <EmpDataRow data={"EID"} info={this.props.E.EmployeeID}/>
                    <EmpDataRow data={"Gender"} info={this.props.E.gender}/>
                    <EmpDataRow data={"Hire Type"} info={"Contract"}/>
                    <EmpDataRow data={"Start Date"} info={"1/1/20"}/>
                    <EmpDataRow data={"Vender"} info={"America"}/>
                    <EmpDataRow data={"Role"} info={"Software Developer"}/>
                    <EmpDataRow data={"Team Name"} info={"USA"}/>

                    <EmpDataRow data={"Location"} info={this.props.E.location}/>
                    <EmpDataRow data={"EID"} info={this.props.E.EmployeeID}/>
                    <EmpDataRow data={"Gender"} info={this.props.E.gender}/>
                    <EmpDataRow data={"Hire Type"} info={"Contract"}/>
                    <EmpDataRow data={"Start Date"} info={"1/1/20"}/>
                    <EmpDataRow data={"Vender"} info={"America"}/>
                    <EmpDataRow data={"Role"} info={"Software Developer"}/>
                    <EmpDataRow data={"Team Name"} info={"USA"}/>



                    

                    

                  </TableBody>
                </Table>
                </div>
                {/* </Paper> */}

                {/* <Paper id="RightPaper">  */}
                <div id="rightdiv">
                 <Table>
                <TableHead>Progress</TableHead>
          
                <TableBody>
                  
                  <Step step={1} num={this.props.E.completed[0]}/>
                  <Step step={2} num={this.props.E.completed[1]}/>
                  <Step step={3} num={this.props.E.completed[2]}/>
                  <Step step={4} num={this.props.E.completed[3]}/>
                  <Step step={5} num={this.props.E.completed[4]}/>
                  <Step step={6} num={this.props.E.completed[5]}/>
                  <Step step={7} num={this.props.E.completed[6]}/>
                  

                </TableBody>
                 </Table>

                {/* </Paper> */}

                </div>
                </div>
               

                </DialogContent>
                
                <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            
            
          </DialogActions>
       
            </Dialog>
             </div> 
            </React.Fragment>
           
         
        );
    }

    
}



ExpandedView.propTypes ={
  E: Employee,
}



export default ExpandedView;