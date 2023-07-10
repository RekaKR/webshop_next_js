import { setProductSuccess, setProductFailure } from './productSlice'

export const getProduct = (url) => (dispatch) => {
  fetch(url)
    .then(res => res.json())
    .then(data => dispatch(setProductSuccess(data)))
    .catch(err => dispatch(setProductFailure(err.message)))
}
