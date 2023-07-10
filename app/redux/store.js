'use client'

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice'
import productsReducer from './features/products/productsSlice'
import productReducer from './features/product/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    product: productReducer,
  }
})

export default store

export const RootState = store.getState
export const AppDispatch = store.dispatch
