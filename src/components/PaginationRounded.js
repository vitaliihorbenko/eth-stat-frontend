import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationRounded = ({
  isMobile,
  page,
  totalCount,
  handlePagechange,
}) => {
  return (
    <div className="container pagination-wrapper">
      <Stack spacing={2}>
        <Pagination
          count={totalCount}
          size="large"
          shape="rounded"
          color="primary"
          page={page}
          className="pagination-component"
          defaultPage={1}
          onChange={handlePagechange}
        />
      </Stack>
    </div>
  );
};

export default PaginationRounded;
