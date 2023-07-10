'use client'

import { configureStore } from "@reduxjs/toolkit"
import productsReducer from './features/products/productsSlice'
import productReducer from './features/product/productSlice'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartReducer
  }
})

export default store

export const RootState = store.getState
export const AppDispatch = store.dispatch
