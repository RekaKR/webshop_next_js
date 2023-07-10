'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsSuccess: (state, action) => {
      state.products = action.payload
      state.error = null
    },
    setProductsFailure: (state, action) => {
      state.products = []
      state.error = action.payload
    },
  }
})

export const { setProductsSuccess, setProductsFailure } = productsSlice.actions
export default productsSlice.reducer
