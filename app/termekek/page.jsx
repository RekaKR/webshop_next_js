'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '@app/redux/features/products/productsAction'

import Product from '@components/Product'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='products-page'>
      <p id='text'>Böngéssz a termékek között!</p>

      <div className='products'>
        {products && products.map(product =>
          <Product key={product.id} product={product} isShow={false} />
        )}
      </div>
    </div>
  )
}

export default ProductsPage
