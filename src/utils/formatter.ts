import { formatDistance } from 'date-fns'

export function relativeDateFormatter(date: string) {
  const pastDate = new Date(date)
  const now = new Date()
  const relativeTime = formatDistance(pastDate, now)
  return relativeTime
}
