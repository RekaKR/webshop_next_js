'use client'

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/products/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  }
})

export default store

export const RootState = store.getState
export const AppDispatch = store.dispatch
