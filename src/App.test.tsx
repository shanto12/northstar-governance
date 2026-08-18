import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Northstar landing page', () => {
  it('presents the core product message and landmarks', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Build AI you can.*stand behind\./)
    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument()
    expect(screen.getByText('Inventory that stays current')).toBeInTheDocument()
  })

  it('opens and closes the briefing dialog', () => {
    render(<App />)
    fireEvent.click(screen.getAllByRole('button', { name: /request a briefing/i })[0])
    expect(screen.getByRole('dialog', { name: /start with clarity/i })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /close dialog/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
