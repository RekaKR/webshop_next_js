'use client'

import { useState, useEffect } from "react"
import Product from "@components/Product"

const ProductsPage = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Hiba történt a bejegyzések lekérésekor:', err))
  }, [])

  return (
    <div>
      <h1>ProductsPage</h1>
      <div className="products">
        {products && products.map(product => <Product key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default ProductsPage
