import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TransactionsTable = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
  ];

  return (
    <div className="transaction-wrapper container">
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell align="center" className="header-title">
                Block number
              </TableCell>
              <TableCell align="center" className="header-title">
                Transaction ID
              </TableCell>
              <TableCell align="center" className="header-title">
                Sender address
              </TableCell>
              <TableCell align="center" className="header-title">
                Recipient's address
              </TableCell>
              <TableCell align="center" className="header-title">
                Block confirmations
              </TableCell>
              <TableCell align="center" className="header-title">
                Date
              </TableCell>
              <TableCell align="center" className="header-title">
                Value
              </TableCell>
              <TableCell align="center" className="header-title last">
                Transaction Fee
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                className="item-table-row"
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="left" className="item-table-cell">
                  {row.name}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.calories}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.fat}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.carbs}left
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.protein}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.protein}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.protein}
                </TableCell>
                <TableCell align="left" className="item-table-cell last">
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionsTable;
