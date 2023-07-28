import { Navigate, Route, Routes } from 'react-router';
import Products from './pages/products';
import ProductDetail from './pages/product-detail';
import { BrowserRouter } from 'react-router-dom';

function AppRouter() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
