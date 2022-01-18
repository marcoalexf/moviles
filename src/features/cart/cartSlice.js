import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Product from '../ProductPage/models/Product';
import { addToCartAsync } from './cartApi';

const initialState = {
  cartProducts: []
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (product) => {
    const response = await addToCartAsync(product);
    if (response) {
        return response.map(el => new Product(el));
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItemToCart: (state, action) => {
      const itemToUpdate = state.cartProducts.filter(p => p.id === action.payload)[0];
      if (itemToUpdate) {
        state.cartProducts = state.cartProducts.map(product => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          } else {
            return {
              ...product
            }
          }
        })
      } else {
        state.cartProducts.push({
          id: action.payload,
          quantity: 1,
          color: 'white',
          capacity: '64gb'
        })
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        debugger;
        state.cartProducts = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
      })
  },
});

export const { } = cartSlice.actions;

export const cartItemsNumber = (state) => state.cart.cartProducts.reduce((a, b) => a.quantity + b.quantity, 0);;

export default cartSlice.reducer;
