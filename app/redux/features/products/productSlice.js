'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  product: null,
  error: null
}

const productSlice = createSlice({
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
    setProductSuccess: (state, action) => {
      state.product = action.payload
      state.error = null
    },
    setProductFailure: (state, action) => {
      state.product = []
      state.error = action.payload
    },
  }
})

export const { setProductsSuccess, setProductsFailure, setProductSuccess, setProductFailure } = productSlice.actions
export default productSlice.reducer
