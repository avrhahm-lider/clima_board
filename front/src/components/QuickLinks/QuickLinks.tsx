import QuickLinkCard from '../QuickLinkCard/QuickLinkCard'
import './QuickLinks.css'

export default function QuickLinks() {
  return (
    <div className='quick-links'>
      <QuickLinkCard label='חיפוש עיר' to='/app/search' />
      <QuickLinkCard label='מועדפים' to='/app/favorites' />
      <QuickLinkCard label='השוואה' to='/app/compare' />
    </div>
  )
}
