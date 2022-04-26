import { configureStore } from '@reduxjs/toolkit';
import priceReducer from '../features/prices/priceSlice'

export const store = configureStore({
  reducer: {
    price: priceReducer,
  },
});
