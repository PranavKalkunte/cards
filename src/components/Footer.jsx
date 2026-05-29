import { useOwner } from '../OwnerContext'

export default function Footer({ onAuthTrigger, onLogout }) {
  const isOwner = useOwner()

  return (
    <footer className="footer" onClick={isOwner ? onLogout : onAuthTrigger}>
      <span className="footer-text">
        cut by kal
        {isOwner && <span className="footer-owner"> ·</span>}
      </span>
    </footer>
  )
}
