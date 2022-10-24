import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInputWiithSelect = ({
  handleSelectChange,
  filterOption,
  handleInputSearchText,
  handleClickButton,
}) => {
  return (
    <div className="search-wrapper">
      <Box sx={{ minWidth: 120 }}>
        <div className="search-select-wrapper">
          <Input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={handleInputSearchText}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterOption}
            defaultValue={filterOption}
            onChange={handleSelectChange}
            className="search-select"
          >
            <MenuItem value="recipAdress" className="select-option">
              Address
            </MenuItem>
            <MenuItem value="blockNumber" className="select-option">
              Block Number
            </MenuItem>
            <MenuItem value="transactionId" className="select-option">
              Transaction ID
            </MenuItem>
          </Select>
        </div>
      </Box>
      <div>
        <Button
          className="search-button"
          variant="contained"
          type="button"
          onClick={() => handleClickButton()}
        >
          <SearchIcon className="button-search-icon" />
        </Button>
      </div>
    </div>
  );
};

export default SearchInputWiithSelect;
