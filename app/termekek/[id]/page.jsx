'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '@app/redux/features/product/productAction'
import { add } from '@app/redux/features/cart/cartSlice'

import Product from '@components/Product'
import Link from 'next/link'

const ProductPage = ({ params }) => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.product)

  useEffect(() => {
    if (params.id) { dispatch(getProduct(`https://fakestoreapi.com/products/${params.id}`)) }
  }, [dispatch, params])

  const addToCart = () => {
    dispatch(add(product))
  }

  return (
    <div className='product-page'>
      {product.id && <>
        <div className='products'>
          <Product key={product.id} product={product} isShow={true} />
        </div>

        <button onClick={addToCart}>Kosárhoz adás</button>

        <Link href='/termekek'>
          <button>Vissza</button>
        </Link>
      </>}
    </div>
  )
}

export default ProductPage
