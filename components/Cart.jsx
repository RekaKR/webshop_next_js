'use client'

import { useState } from 'react'
/*
eltárolni benne a termékeket
*/

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <p>Kosár: 10 {/*{cartItems.length()}*/} termék</p>
    </div>
  )
}

export default Cart
