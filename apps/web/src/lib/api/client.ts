import createClient from 'openapi-fetch'
import type { paths } from './schema'

export const api = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api/v1',
  credentials: 'include',
})

api.use({
  onRequest({ request }) {
    if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) return request

    const token = document.cookie
      .split('; ')
      .find((part) => part.startsWith('XSRF-TOKEN='))
      ?.slice('XSRF-TOKEN='.length)

    if (token) request.headers.set('X-XSRF-TOKEN', decodeURIComponent(token))
    return request
  },
})

export async function initializeCsrf(): Promise<void> {
  const response = await fetch('/sanctum/csrf-cookie', {
    credentials: 'include',
  })
  if (!response.ok) throw new Error('CSRF initialization failed')
}
