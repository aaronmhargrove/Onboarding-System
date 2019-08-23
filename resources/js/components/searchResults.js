import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './searchResults.css';
import ExpandedView from './expandedView.js';



var empData= 
[
   {lastName:"Smith", firstName:"John",EmployeeID:"12345",location:"St. Louis",gender:"M",
    completed:[1,1,1,0,0,0,0]},
  {lastName:"Martin", firstName:"Frank",EmployeeID:"23434",location:"St. Louis",gender:"M",
    completed:[1,1,1,1,1,0,0]},
  {lastName:"Tonaser", firstName:"Jenny",EmployeeID:"67575",location:"St. Louis",gender:"F",
    completed:[1,0,0,0,0,0,0]},
  {lastName:"Ruthers", firstName:"Patrick",EmployeeID:"98797",location:"St. Louis",gender:"M",
    completed:[1,1,0,0,0,0,0]},
  {lastName:"Gonert", firstName:"Ian",EmployeeID:"23477",location:"St. Louis",gender:"M",
  completed:[1,1,1,1,1,0,0]},
  {lastName:"Homer", firstName:"Louisa",EmployeeID:"98603",location:"St.Louis",gender:"F",
    completed:[1,1,1,1,1,1,0]},
 
  

]



class SearchResults extends React.Component {

    constructor (props)
    {
        super(props);
        this.state =
        {
            isOpen:false,
        };
    } 




    render() {
        return (
            <div className="searchResultsTable">
                <Table className="interiorTable">
                    <TableHead>
                        <TableRow >
                           <TableCell>Last Name</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>UserID</TableCell>
                            <TableCell>Steps Completed</TableCell> 
                                                    
                        </TableRow>
                    </TableHead>
                    
                   <TableBody>
                    <ExpandedView E={empData[0]} > </ExpandedView>
                    <ExpandedView  E={empData[1]}> </ExpandedView>
                    <ExpandedView  E={empData[2]}> </ExpandedView>
                    <ExpandedView  E={empData[3]}> </ExpandedView>
                    <ExpandedView  E={empData[4]}> </ExpandedView>
                    <ExpandedView  E={empData[5]}> </ExpandedView>
                    </TableBody>
                </Table>
            </div>
        );
    }
}







export default SearchResults;