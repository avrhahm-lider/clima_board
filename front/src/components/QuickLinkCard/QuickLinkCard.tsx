import { useNavigate } from 'react-router'

interface QuickLinkCardProps {
  label: string
  to: string
}

export default function QuickLinkCard({ label, to }: QuickLinkCardProps) {
  const navigate = useNavigate()
  return (
    <button className='card quick-link-card' onClick={() => navigate(to)}>
      {label}
    </button>
  )
}
