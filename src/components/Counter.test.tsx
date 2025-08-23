// src/components/Counter.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import Counter from './Counter'

test('increases and decreases the counter (by role, like a user)', async () => {
  render(<Counter />)
  const user = userEvent.setup()

  const count = screen.getByLabelText(/count/i)
  expect(count).toHaveTextContent('0')

  await user.click(screen.getByRole('button', { name: /increase/i }))
  expect(count).toHaveTextContent('1')

  await user.click(screen.getByRole('button', { name: /decrease/i }))
  expect(count).toHaveTextContent('0')
})
