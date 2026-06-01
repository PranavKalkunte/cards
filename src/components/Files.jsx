import { useState } from 'react'
import FolderTree from './FolderTree'
import { getFolderById } from '../utils'


const UNFILED = '__unfiled__'

function getUnfiledCards(folders, cards) {
  const folderedIds = new Set()
  function traverse(items) {
    for (const f of items) {
      f.children.filter(c => typeof c === 'string').forEach(id => folderedIds.add(id))
      f.children.filter(c => typeof c === 'object').forEach(sub => traverse([sub]))
    }
  }
  traverse(folders)
  return Object.values(cards).filter(c => !folderedIds.has(c.id))
}

function buildBold(segments) {
  return segments
    .filter(s => s.type === 'power' || s.type === 'both')
    .map(s => ({ text: s.text }))
}

function getFolderPathWithIds(folders, folderId) {
  function search(items, path) {
    for (const f of items) {
      const p = [...path, { id: f.id, name: f.name }]
      if (f.id === folderId) return p
      const found = search(f.children.filter(c => typeof c === 'object'), p)
      if (found) return found
    }
    return null
  }
  return search(folders, [])
}

export default function Files({
  folders, cards, tags,
  selectedFolderId, onSelectFolder,
  onCardClick, onAddFolder,
  onRenameFolder, onDeleteFolder, onMoveCard,
}) {
  const [hoveredId, setHoveredId] = useState(null)
  // Right panel shows hovered folder as preview, falls back to selected
  const displayId     = hoveredId || selectedFolderId
  const isDisplayUnfiled = displayId === UNFILED
  const displayFolder = (!isDisplayUnfiled && displayId) ? getFolderById(folders, displayId) : null
  const displayCards  = isDisplayUnfiled
    ? getUnfiledCards(folders, cards)
    : displayFolder
      ? displayFolder.children.filter(c => typeof c === 'string').map(id => cards[id]).filter(Boolean)
      : []

  const inboxCount = getUnfiledCards(folders, cards).length

  const inboxOpacity = hoveredId === UNFILED ? 1
    : selectedFolderId === UNFILED ? 1
    : hoveredId ? 0.2
    : selectedFolderId ? 0.5
    : 0.65

  return (
    <div className="files" data-panel={selectedFolderId ? 'content' : 'tree'}>
      <div className="files-tree">
        <div
          className="gallery-tree-row"
          style={{ paddingLeft: 20, opacity: inboxOpacity, transition: 'opacity 0.18s ease', marginBottom: 4 }}
          onClick={() => onSelectFolder(UNFILED)}
          onMouseEnter={() => setHoveredId(UNFILED)}
        >
          <span
            className="gallery-tree-name"
            style={{
              fontSize: 28,
              fontFamily: 'var(--display)',
              fontWeight: 400,
              color: selectedFolderId === UNFILED ? 'var(--accent)' : 'var(--ink)',
              letterSpacing: '-0.02em',
              transition: 'color 0.15s ease',
            }}
          >Inbox</span>
          {inboxCount > 0 && <span className="gallery-tree-count">{inboxCount}</span>}
        </div>

        <FolderTree
          folders={folders}
          selectedId={selectedFolderId}
          onSelect={onSelectFolder}
          onAddFolder={onAddFolder}
          onRenameFolder={onRenameFolder}
          onDeleteFolder={onDeleteFolder}
          onMoveCard={onMoveCard}
          hoveredId={hoveredId}
          onHover={setHoveredId}
        />
      </div>

      <div className="files-content">
        {displayId ? (
          <div key={displayId} style={{ animation: 'folderFadeIn 0.18s ease' }}>
            <div className="files-content-header">
              <button className="files-mobile-back" onClick={() => onSelectFolder(null)}>‹</button>
              <nav className="files-breadcrumb-nav">
                {isDisplayUnfiled ? (
                  <span className="files-breadcrumb-item active">Inbox</span>
                ) : displayFolder ? (
                  (getFolderPathWithIds(folders, displayId) || []).map((seg, i, arr) => (
                    <span key={seg.id} className="files-breadcrumb-segment">
                      {i > 0 && <span className="files-breadcrumb-sep">/</span>}
                      <span
                        className={`files-breadcrumb-item${i === arr.length - 1 ? ' active' : ''}`}
                        onClick={() => i < arr.length - 1 ? onSelectFolder(seg.id) : undefined}
                      >
                        {seg.name}
                      </span>
                    </span>
                  ))
                ) : null}
              </nav>
            </div>
            {displayCards.map(card => {
              const bold = buildBold(card.segments || [])
              return (
                <div
                  key={card.id}
                  className="folder-card"
                  draggable
                  onDragStart={e => e.dataTransfer.setData('cardId', card.id)}
                  onClick={() => onCardClick(card.id)}
                >
                  <div className="folder-card-meta">{[card.author, card.year].filter(Boolean).join(' · ')}</div>
                  <div className="folder-card-tagline">{card.tagline}</div>
                  {bold.length > 0 && (
                    <p className="card-text" style={{ fontSize: 15, marginTop: 8 }}>
                      {bold.map((t, i) => <span key={i}>{t.text}</span>)}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}
