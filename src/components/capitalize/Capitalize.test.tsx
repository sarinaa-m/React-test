// src/components/Capitalize.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import Capitalize from './Capitalize';



test('should return Capitalize value', async () => {
    render(<Capitalize />)
    const user = userEvent.setup()


    // کاربر متن وارد می‌کنه
    await user.type(screen.getByLabelText(/text-input/i), 'hELLo')

    // کاربر روی دکمه کلیک می‌کنه
    await user.click(screen.getByRole('button', { name: /capitalize/i }))

    // انتظار داریم خروجی "Hello" باشه
    expect(screen.getByText('HELLO')).toBeInTheDocument()


})