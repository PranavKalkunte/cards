import { useEffect } from 'react'
import TextRenderer from './TextRenderer'
import { getCardFolderPath, getCardFolderId } from '../utils'
import { useOwner } from '../OwnerContext'

export default function CardModal({ card, folders, tags, onClose, onEdit, onNavigateToFolder, onTogglePin }) {
  const isOwner = useOwner()

  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  const path     = getCardFolderPath(folders, card.id)
  const folderId = getCardFolderId(folders, card.id)
  const cardTags = (card.tagIds || [])
    .map(id => tags[id] || { id, name: id.replace(/^tg-/, '').replace(/-/g, ' ') })
    .filter(Boolean)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-dismiss" onClick={onClose}>×</button>

        {path && (
          <div
            className="modal-path"
            onClick={() => folderId && onNavigateToFolder(folderId)}
            title="Open in files"
          >
            {path.join(' / ')} ↗
          </div>
        )}

        <div className="modal-author">
          {card.author}&ensp;{card.year}
          {card.pinned && <span style={{ color: 'var(--accent)', marginLeft: 6 }}>●</span>}
        </div>

        <div className="modal-source">
          {card.sourceUrl ? (
            <a
              className="modal-source-link"
              href={card.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              {card.source}
              <em className="source-icon">↗</em>
            </a>
          ) : (
            card.source
          )}
        </div>

        <div className="modal-tagline">{card.tagline}</div>

        {cardTags.length > 0 && (
          <div className="tag-row">
            {cardTags.map(tag => (
              <span key={tag.id} className="tag-pill">{tag.name}</span>
            ))}
          </div>
        )}

        <TextRenderer segments={card.segments} />

        {isOwner && (
          <div className="modal-actions">
            <button className="modal-action-btn" onClick={onEdit}>edit</button>
            <button
              className={`modal-action-btn${card.pinned ? ' modal-action-pin' : ''}`}
              onClick={e => { e.stopPropagation(); onTogglePin() }}
            >
              {card.pinned ? 'unpin' : 'pin'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
