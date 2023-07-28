import ProductsCard from '../components/products/products-card';
import { useDispatch } from 'react-redux';
import axios from '../config/axios';
import { ENDPOINTS } from '../constants/endpoints';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setProducts, setError, setIsLoading } from '../store/slices/products';
import { PageContainer } from '../components/shared/page-container';
import Header from '../components/layout/header';
import { Main } from '../components/shared/main-container';

function Products() {
  const dispatch = useDispatch();
  const fetchProducts = () => axios.get(`${ENDPOINTS.PRODUCTS}`);
  const { data, error, isLoading } = useQuery(['products'], fetchProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    if (data?.data?.products) {
      dispatch(setProducts(data.data.products));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      dispatch(setError(error));
    }
  }, [error]);

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading]);

  return (
    <Main>
      <Header />
      <PageContainer>
        <ProductsCard />
      </PageContainer>
    </Main>
  );
}

export default Products;
