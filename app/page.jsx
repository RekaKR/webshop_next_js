'use client'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from "./redux/features/counter/counterSlice"

const Home = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page of the project</p>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
    </div>
  )
}

export default Home
