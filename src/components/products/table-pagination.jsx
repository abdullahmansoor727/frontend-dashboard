import { TablePagination, TableRow, styled } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setPageSize } from '../../store/slices/products';

function Pagination() {
  const { total, page, pageSize } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(setPageSize(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  return (
    <TableRow
      sx={{
        marginLeft: 'auto'
      }}
    >
      <StyledTablePagination
        count={total ?? 0}
        page={page}
        rowsPerPage={pageSize}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableRow>
  );
}

export default Pagination;

Pagination.propTypes = {
  total: PropTypes.number,
  paginateItems: PropTypes.func
};

const StyledTablePagination = styled(TablePagination)(() => ({
  '&.MuiTablePagination-root': {
    borderBottom: 'none'
  },
  '&&& .MuiTablePagination-toolbar': {
    minHeight: 'unset'
  }
}));
