import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Todo from './Todo'

describe('Todo', () => {
  it('renders an unfinished todo with completion action', () => {
    const todo = {
      _id: '1',
      text: 'Learn Docker',
      done: false,
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    )

    expect(screen.getByText('Learn Docker')).toBeTruthy()
    expect(screen.getByText('This todo is not done')).toBeTruthy()
    expect(screen.getByRole('button', { name: /set as done/i })).toBeTruthy()
  })
})