import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cart reducer

// Create the Redux store with the cartReducer managing the 'cart' slice
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cartReducer to manage the cart slice of state
  },
});

export default store; // Export the store
