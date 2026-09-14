import './EmptyState.css'

interface EmptyStateProps {
  message: string
}

export default function EmptyState({ message }: EmptyStateProps) {
  return <div className='empty-state text-muted'>{message}</div>
}
