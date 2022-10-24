import React, { useCallback, useEffect, useState } from "react";
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
  const [filterOption, setFilterOption] = useState("recipAdress");

  const getTransactions = useCallback(
    async (currentPage = 1) => {
      setIsLoading(true);
      try {
        const { data } = await getData(
          `./api/transactions?filterOption=${filterOption}&searchString=${searchQuery}&page=${currentPage}`
        );
        setTransactionsData(data);
        setTotalCount(data.totalPageCount);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    },
    [filterOption, searchQuery]
  );

  useEffect(() => {
    getTransactions();
  }, []);

  const handlePagechange = (event, value) => {
    setCurrentPage(value);
    getTransactions(value);
  };

  const handleSelectChange = (event) => {
    setFilterOption(event.target.value);
  };
  const handleInputSearchText = (event) => {
    setSearchQuery(event.target.value.trim());
  };

  const handleClickButton = async () => {
    await getTransactions();
  };

  return (
    <div className="transaction-wrapper container">
      <SearchInputWiithSelect
        filterOption={filterOption}
        handleSelectChange={handleSelectChange}
        handleInputSearchText={handleInputSearchText}
        handleClickButton={handleClickButton}
      />
      {!isLoading ? (
        <>
          <TableContainer component={Paper} className="table-container">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="table-header">
                <TableRow>
                  <TableCell
                    align="left"
                    className="header-title block-number "
                  >
                    Block number
                  </TableCell>
                  <TableCell
                    align="left"
                    className="header-title transaction-id"
                  >
                    Transaction ID
                  </TableCell>
                  <TableCell
                    align="left"
                    className="header-title sender-address"
                  >
                    Sender address
                  </TableCell>
                  <TableCell
                    align="left"
                    className="header-title recipient-address"
                  >
                    Recipient's address
                  </TableCell>
                  <TableCell align="left" className="header-title">
                    Block confirmations
                  </TableCell>
                  <TableCell align="left" className="header-title">
                    Date
                  </TableCell>
                  <TableCell align="left" className="header-title">
                    Value
                  </TableCell>
                  <TableCell align="left" className="header-title last">
                    Transaction Fee
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionsData?.transactions?.map((row) => (
                  <TableRow
                    key={row.transactionId}
                    className="item-table-row"
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      align="left"
                      className="item-table-cell block-number"
                    >
                      {row.blockNumber}
                    </TableCell>
                    <TableCell
                      align="left"
                      className="item-table-cell transaction-id"
                    >
                      <a
                        href={`https://etherscan.io/tx/${row.transactionId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {row.transactionId}
                      </a>
                    </TableCell>
                    <TableCell
                      align="left"
                      className="item-table-cell sender-address"
                    >
                      {row.senderAdress}
                    </TableCell>
                    <TableCell
                      align="left"
                      className="item-table-cell recipient-address"
                    >
                      {row.recipAdress}
                    </TableCell>
                    <TableCell
                      align="left"
                      className="item-table-cell block-confirm"
                    >
                      {transactionsData.currentBlockNumber - row.blockNumber}
                    </TableCell>
                    <TableCell align="left" className="item-table-cell date">
                      {row.date}
                    </TableCell>
                    <TableCell align="left" className="item-table-cell value">
                      {row.value}
                    </TableCell>
                    <TableCell
                      align="left"
                      className="item-table-cell last transaction-fee"
                    >
                      {row.transactionFee}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <PaginationRounded
            handlePagechange={handlePagechange}
            totalCount={totalCount}
            page={currentPage}
          />
        </>
      ) : null}
    </div>
  );
};

export default TransactionsTable;
