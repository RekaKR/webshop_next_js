'use client'

import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => console.log(json))
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
