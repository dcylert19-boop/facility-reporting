import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { statusQueryOptions } from '@/features/status/status-query'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const status = useQuery(statusQueryOptions)
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-5 px-6">
      <div>
        <p className="text-muted-foreground text-sm">Engineering bootstrap</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Facility Reporting
        </h1>
        <p className="text-muted-foreground mt-2">
          Product discovery is in progress.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button type="button">UI ready</Button>
        <span className="text-muted-foreground text-sm">
          API:{' '}
          {status.isPending
            ? 'checking'
            : status.isError
              ? 'unavailable'
              : status.data.data.status}
        </span>
      </div>
    </main>
  )
}
