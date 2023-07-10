'use client'

import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state => state.cart.items)

  return (
    <div>
      <p>Kosár: {cart?.length} termék</p>
    </div>
  )
}

export default Cart
