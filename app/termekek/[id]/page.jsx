'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '@app/redux/features/product/productAction'

import Product from '@components/Product'
import Link from 'next/link'

/*
egy gomb, amivel az adott terméket a kosárba tudod rakni.
*/

const ProductPage = ({ params }) => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.product)

  useEffect(() => {
    if (params.id) { dispatch(getProduct(`https://fakestoreapi.com/products/${params.id}`)) }
  }, [dispatch, params])

  //console.log(product && product)
  return (
    <div>
      <h1>ProductPage</h1>

      <div className="products">
        <Product key={product.id} product={product} isShow={true} />
      </div>

      <button>Kosárba adás</button>

      <Link href="/termekek">
        <button>Vissza</button>
      </Link>
    </div>
  )
}

export default ProductPage
