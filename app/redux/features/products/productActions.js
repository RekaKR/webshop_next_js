import { setProductsSuccess, setProductsFailure, setProductSuccess, setProductFailure } from './productSlice'

export const getProducts = (url) => (dispatch) => {
  fetch(url)
    .then(res => res.json())
    .then(data => dispatch(setProductsSuccess(data)))
    .catch(err => dispatch(setProductsFailure(err.message)))
}

export const getProduct = (url) => (dispatch) => {
  fetch(url)
    .then(res => res.json())
    .then(data => dispatch(setProductSuccess(data)))
    .catch(err => dispatch(setProductFailure(err.message)))
}
