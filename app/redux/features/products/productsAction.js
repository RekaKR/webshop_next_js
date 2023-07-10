import { setProductsSuccess, setProductsFailure } from './productsSlice'

export const getProducts = () => (dispatch) => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => dispatch(setProductsSuccess(data)))
    .catch(err => dispatch(setProductsFailure(err.message)))
}
