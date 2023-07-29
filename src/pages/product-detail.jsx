import { PageContainer } from '../components/shared/page-container';
import Header from '../components/layout/header';
import { Main } from '../components/shared/main-container';
import ProductDetailCard from '../components/product-detail/product-detail-card';

function ProductDetail() {
  return (
    <Main>
      <Header />
      <PageContainer>
        <ProductDetailCard />
      </PageContainer>
    </Main>
  );
}

export default ProductDetail;
