import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartInitialState, Item } from '../interfaces/types';

const initialState: CartInitialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalAmount += action.payload.price * action.payload.amount;
      if (existingItem) {
        existingItem.amount += action.payload.amount;
      } else {
        state.items.push(action.payload);
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount--;
        state.totalAmount -= item.price;
        state.items = state.items.filter((item) => item.amount !== 0);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
