import { styled, Box, Typography, Card } from '@mui/material';
import Searchbar from './searchbar';
import Pagination from './table-pagination';
import ProductsTable from './products-table';
import { useDispatch } from 'react-redux';
import { setPage, setSearchText } from '../../store/slices/products';

export default function ProductsCard() {
  const dispatch = useDispatch();
  const filterProducts = (searchText) => {
    dispatch(setPage(0));
    dispatch(setSearchText(searchText));
  };

  return (
    <ProductsContainer>
      <TitleHeader>
        <Typography className="title">Products</Typography>
        <Searchbar filterItems={filterProducts} />
        <Pagination />
      </TitleHeader>
      <ProductsTable />
    </ProductsContainer>
  );
}

const ProductsContainer = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  borderRadius: '0.625rem',
  boxShadow: '0px 3px 24px 2px rgba(171, 171, 171, 0.14)',
  width: '100%'
}));

const TitleHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  padding: '0 0.5rem',

  '.title': {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#444444'
  }
}));
