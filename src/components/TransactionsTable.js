import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginationRounded from "./PaginationRounded";
import SearchInputWiithSelect from "./SearchInputWiithSelect";
import { getData } from "../api/Api";

const TransactionsTable = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("address");

  console.log(transactionsData);
  const getTransactions = async () => {
    try {
      const { data } = await getData("http://localhost:4000/api/transactions");
      console.log(data);
      setTransactionsData(data.transactions.slice(0, 14));
      setTotalCount(data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!transactionsData.length) getTransactions();
  }, [transactionsData.length]);

  const handlePagechange = (page) => {
    setIsLoading(true);
    setCurrentPage(page);
  };

  return (
    <div className="transaction-wrapper container">
      <SearchInputWiithSelect />
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
            {transactionsData?.map((row) => (
              <TableRow
                key={row.transactionId}
                className="item-table-row"
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="left" className="item-table-cell">
                  {row.blockNumber}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  <a
                    href={`https://etherscan.io/tx/${row.transactionId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.transactionId}
                  </a>
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.senderAdress}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.recipAdress}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.blockConfirmations}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.date}
                </TableCell>
                <TableCell align="left" className="item-table-cell">
                  {row.value}
                </TableCell>
                <TableCell align="left" className="item-table-cell last">
                  {row.transactionFee}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!isLoading ? (
        <PaginationRounded
          handlePagechange={handlePagechange}
          totalCount={totalCount}
          page={currentPage}
        />
      ) : null}
    </div>
  );
};

export default TransactionsTable;
