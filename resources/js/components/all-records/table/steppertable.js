/*
* Author: Matthew Chaplin
* Bayer Onboarding
* Date: 4/6/19
*/
import React from 'react';
import MaterialTable from 'material-table';
import Modal from '@material-ui/core/Modal'
/*import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { AutoSizer, Column, SortDirection, Table } from 'react-virtualized';*/
import { SvgIconProps } from '@material-ui/core/SvgIcon'

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Clear from '@material-ui/icons/Clear'

class StepperTable extends React.Component {
  render() {
    const { columns } = this.props; 
    this.state = {filterModalOpen: false};
    return (
      <div style={{ maxWidth: '100%' }}>
      <Modal
        open={this.state.filterModalOpen}
        onClose={onModalClose = (event) => {
          this.setState({
            filterModalOpen: false
          });
        }}
        ></Modal>        
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
            columns = {columns}
            onRowClick = { (event) => Modal.open }
          /*columns={[
            { title: 'First Name', field: 'name' },
            { title: 'Last Name', field: 'surname' },
            { title: 'BirthDate', field: 'birthYear', type: 'numeric' },
            { title: 'BirthCity', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}*/
          data={[
            // { name: 'Jace', surname: 'Plute', birthYear: 1995, birthCity: 63 },
            // { name: 'Bob', surname: 'Ross', birthYear: 1955, birthCity: 63 },
            // { name: 'Vanilla', surname: 'Ice', birthYear: 1975, birthCity: 63 },
            // { name: 'Jay', surname: 'Jay', birthYear: 1980, birthCity: 63 },
            // { name: 'Jay', surname: 'Jay', birthYear: 1981, birthCity: 63 }
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            },
            {
              name: 'Bob Ross',
              dateEntered: '5/14/19',
              regionalLocation: 302,
              cwid: 303,
              gender: 304,
              hireType: 305,
              pdStartDate: 306,
              vendor: 307,
              role: 30,
              plic: 30,
              teamName: 30,
              platform: 30,
              manager: 30,
              hireStatus: 30,
              onboardingBuddy: 30,
              computerNeeds: 30,
              seatNumberAssigned: 30,
              campus: 30,
              managerComments: 30,
              neidEid: 30,
              newHireReHire: 30,
              dateEnteredHire: 30,
              macTicket: 30,
              dateEnteredMacTicket: 30,
              dateLaptopDelivered: 30,
              onboardingBuddyEmailSent: 30,
              addToDlsAndPdOrg: 30,
              welcomeEmailSent: 30,
              adminName: 30
            }
        ]}
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

//const StepperTable = withStyles(styles)(MuiVirtualizedTable);

export default StepperTable;
/*
const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  getRowClassName = ({ index }) => {
    const { classes, rowClassName, onRowClick } = this.props;

    return classNames(classes.tableRow, classes.flexContainer, rowClassName, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex = null }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={classNames(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex, dataKey, sortBy, sortDirection }) => {
    const { headerHeight, columns, classes, sort } = this.props;
    const direction = {
      [SortDirection.ASC]: 'asc',
      [SortDirection.DESC]: 'desc',
    };

    const inner =
      !columns[columnIndex].disableSort && sort != null ? (
        <TableSortLabel active={dataKey === sortBy} direction={direction[sortDirection]}>
          {label}
        </TableSortLabel>
      ) : (
        label
      );

    return (
      <TableCell
        component="div"
        className={classNames(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        {inner}
      </TableCell>
    );
  };

  render() {
    const { classes, columns, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            height={height}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ cellContentRenderer = null, className, dataKey, ...other }, index) => {
              let renderer;
              if (cellContentRenderer != null) {
                renderer = cellRendererProps =>
                  this.cellRenderer({
                    cellData: cellContentRenderer(cellRendererProps),
                    columnIndex: index,
                  });
              } else {
                renderer = this.cellRenderer;
              }

              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classNames(classes.flexContainer, className)}
                  cellRenderer={renderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>      
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      cellContentRenderer: PropTypes.func,
      dataKey: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowClassName: PropTypes.string,
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  sort: PropTypes.func,
};

MuiVirtualizedTable.defaultProps = {
  headerHeight: 56,
  rowHeight: 56,
};

const StepperTable = withStyles(styles)(MuiVirtualizedTable);

export default StepperTable;
*/