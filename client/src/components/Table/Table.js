import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "timeIn", label: "Time in", minWidth: 170 },
  {
    id: "timeOut",
    label: "Time out",
    minWidth: 170,
  },
];

function createData(name, timeIn, timeOut) {
  return { name, timeIn, timeOut };
}

const rows = [
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  createData("Jill Spohn", "3:00 am", "6:00 pm"),
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  createData("Jill Spohn", "3:00 am", "6:00 pm"),
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  createData("Jill Spohn", "3:00 am", "6:00 pm"),
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  createData("Jill Spohn", "3:00 am", "6:00 pm"),
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  createData("Jill Spohn", "3:00 am", "6:00 pm"),
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  createData("Jill Spohn", "3:00 am", "6:00 pm"),
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  createData("Jill Spohn", "3:00 am", "6:00 pm"),
  createData("Preston Carroll", "4:00 am", "10:00 pm"),
  
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className=" ui container">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
