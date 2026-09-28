import { queryOptions } from '@tanstack/react-query'
import { api } from '@/lib/api/client'

export const statusQueryOptions = queryOptions({
  queryKey: ['status'],
  queryFn: async () => {
    const { data, error } = await api.GET('/status')
    if (error || !data) throw new Error('API status request failed')
    return data
  },
})
