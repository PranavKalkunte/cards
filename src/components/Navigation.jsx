import { useOwner } from '../OwnerContext'

export default function Navigation({ activeTab, onTabChange, onNew, dark, onToggleDark, onOwnerLogout }) {
  const isOwner = useOwner()

  return (
    <nav className="nav">
      {isOwner && (
        <button className="nav-owner" onClick={onOwnerLogout} title="exit owner mode">·</button>
      )}
      <button
        className={`nav-item${activeTab === 'cuts' ? ' active' : ''}`}
        onClick={() => onTabChange('cuts')}
      >
        cuts
      </button>
      <button
        className={`nav-item${activeTab === 'files' ? ' active' : ''}`}
        onClick={() => onTabChange('files')}
      >
        files
      </button>
      <button
        className={`nav-item${activeTab === 'briefs' ? ' active' : ''}`}
        onClick={() => onTabChange('briefs')}
      >
        briefs
      </button>
      {isOwner && (
        <button className="nav-plus" onClick={onNew}>+</button>
      )}
      <button className="nav-mode" onClick={onToggleDark}>
        {dark ? 'light' : 'dark'}
      </button>
    </nav>
  )
}
