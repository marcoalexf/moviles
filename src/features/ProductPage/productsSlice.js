import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Product from './models/Product';
import { DetailProduct } from '../ProductDetailPage/models/ProductDetail';
import { fetchProductsAsync, fetchProductDetailAsync } from './productsApi';

const initialState = {
  products: [],
  detailProduct: {},
  productsStatus: 'empty',
  productDetailStatus: 'empty',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProductsAsync();
    if (response) {
        return response.map(el => new Product(el));
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  'products/fetchProductDetail',
  async (id) => {
    const response = await fetchProductDetailAsync(id);
    if (response) {
        return new DetailProduct(response);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectProduct: (state, action) => {
        const productToDetail = state.products.filter(product => product.id === action.payload);
        if (productToDetail.length > 0) {
            state.detailProduct = productToDetail;
        }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = 'loaded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
          state.productsStatus = 'error';
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.productsStatus = 'loading';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.detailProduct = action.payload;
        state.productsStatus = 'loaded';
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.productsStatus = 'error';
      });
  },
});

export const { selectProduct } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectProductDetail = (state) => state.products.detailProduct;

export default productsSlice.reducer;
