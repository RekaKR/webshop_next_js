'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '@app/redux/features/products/productActions'

import Product from '@components/Product'
import Link from 'next/link'

/*
egy gomb, amivel az adott terméket a kosárba tudod rakni.
*/

const ProductPage = ({ params }) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  console.log('product', products)

  useEffect(() => {
    dispatch(getProduct(`https://fakestoreapi.com/products/${params.id}`))
  }, [dispatch])

  console.log(products && products)
  return (
    <div>
      <h1>ProductPage</h1>

      <div className="products">
        <Product key={products.id} product={products} isShow={true} />
      </div>

      <button>Kosárba adás</button>

      <Link href="/termekek">
        <button>Vissza</button>
      </Link>
    </div>
  )
}

export default ProductPage
