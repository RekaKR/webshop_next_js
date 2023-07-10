'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  product: {},
  error: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductSuccess: (state, action) => {
      state.product = action.payload
      state.error = null
    },
    setProductFailure: (state, action) => {
      state.product = {}
      state.error = action.payload
    },
  }
})

export const { setProductSuccess, setProductFailure } = productSlice.actions
export default productSlice.reducer
