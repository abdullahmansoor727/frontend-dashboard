import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    searchText: '',
    page: 0,
    pageSize: 10,
    error: null,
    isLoading: false,
    total: 0
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    }
  }
});

export const { setProducts, setSearchText, setPage, setPageSize, setError, setIsLoading, setTotal } = productSlice.actions;
export default productSlice.reducer;
