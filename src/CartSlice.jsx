import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ ...item, quantity: 1 }); // Otherwise, add it with quantity 1
      }
    },
    
    // Removes an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Updates the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity; // Update the quantity of the item
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
