// src/components/Counter.tsx
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2 aria-label="count">{count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
    </div>
  )
}
