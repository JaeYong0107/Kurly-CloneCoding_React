import { configureStore } from '@reduxjs/toolkit';

import viewReducer from './view.js';
import cartReducer from './cart.js';

const store = configureStore({
    reducer: { view: viewReducer, cart: cartReducer }
})

export default store;