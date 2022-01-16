import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsSlice from '../features/ProductPage/productsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
