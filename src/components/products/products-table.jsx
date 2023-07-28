import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import { PropTypes } from 'prop-types';
import { formatPrice } from '../../utils/format-price';
import { ErrorOutline, InfoOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useEffect } from 'react';
import { setTotal } from '../../store/slices/products';
import { toSentenceCase } from '../../utils/toSentenceCase';
import { CenterAlignedContainer } from '../shared/center-aligned-container';
import MessageContainer from '../shared/message-container';
import { useNavigate } from 'react-router';

function ProductsTable() {
  const { products, error, isLoading, searchText, page, pageSize } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredProducts = useMemo(
    () => products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase())),

    [products, searchText]
  );

  const filteredAndPaginatedProducts = useMemo(
    () => filteredProducts.slice(page * pageSize, page * pageSize + pageSize),
    [filteredProducts, pageSize, page]
  );

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    dispatch(setTotal(filteredProducts.length));
  }, [filteredProducts, dispatch, setTotal]);

  if (error)
    return (
      <CenterAlignedContainer>
        <MessageContainer
          variant="error"
          text={error?.message ?? 'Some error occured while fetching products'}
          icon={<ErrorOutline fontSize="large" />}
        />
      </CenterAlignedContainer>
    );

  if (isLoading)
    return (
      <CenterAlignedContainer>
        <CircularProgress />
      </CenterAlignedContainer>
    );

  if (!filteredAndPaginatedProducts.length)
    return (
      <CenterAlignedContainer>
        <MessageContainer variant="info" text="No products found" icon={<InfoOutlined fontSize="large" />} />
      </CenterAlignedContainer>
    );

  return (
    <StyledTableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredAndPaginatedProducts?.map((product) => (
            <StyledTableRow onClick={() => handleProductClick(product.id)} hover key={product.id}>
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{toSentenceCase(product.category)}</TableCell>
              <TableCell>{formatPrice(product.price)}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default ProductsTable;

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

const StyledTableContainer = styled(TableContainer)(() => ({
  maxHeight: 'calc(100vh - 12rem)'
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': { border: 0 },
  cursor: 'pointer'
}));
