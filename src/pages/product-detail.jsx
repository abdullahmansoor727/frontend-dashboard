import { useParams } from 'react-router';
import { PageContainer } from '../components/shared/page-container';
import axios from '../config/axios';
import { ENDPOINTS } from '../constants/endpoints';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Header from '../components/layout/header';
import { Main } from '../components/shared/main-container';
import ProductDetailCard from '../components/product-detail/product-detail-card';

function ProductDetail() {
  const params = useParams();
  const { products } = useSelector((state) => state.products);
  const selectedProduct = products.find((p) => p.id === parseInt(params.id, 10));
  const [productDetails, setProductDetails] = useState(null);

  const fetchProduct = () => axios.get(`${ENDPOINTS.PRODUCT_DETAIL}/${params.id}`);

  const { data, error, isLoading } = useQuery(['product-detail'], fetchProduct, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !selectedProduct
  });

  useEffect(() => {
    if (!selectedProduct && data?.data) {
      setProductDetails(data?.data);
    } else setProductDetails(selectedProduct);
  }, [data?.data, selectedProduct?.id]);

  return (
    <Main>
      <Header />
      <PageContainer>
        <ProductDetailCard error={error} isLoading={isLoading} detail={productDetails} />
      </PageContainer>
    </Main>
  );
}

export default ProductDetail;
