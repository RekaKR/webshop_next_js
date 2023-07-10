'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/features/products/productActions"

import Product from "@components/Product"

const ProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  console.log('products', products)

  useEffect(() => {
    dispatch(getProducts('https://fakestoreapi.com/products'))
  }, [dispatch])

  return (
    <div>
      <h1>ProductsPage</h1>
      <div className="products">
        {products && products.map(product => <Product key={product.id} product={product} isShow={false} />)}
      </div>
    </div>
  )
}

export default ProductsPage
