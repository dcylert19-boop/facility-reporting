import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'

vi.mock('@/features/status/status-query', () => ({
  statusQueryOptions: {
    queryKey: ['status'],
    queryFn: async () => ({ data: { status: 'ok' } }),
  },
}))

describe('application shell', () => {
  it('renders through the router with a shadcn button', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/'] }),
    })
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    )
    expect(
      await screen.findByRole('heading', { name: 'Facility Reporting' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'UI ready' })).toBeInTheDocument()
  })
})
