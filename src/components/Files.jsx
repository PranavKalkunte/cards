import { useState } from 'react'
import FolderTree from './FolderTree'
import { getFolderById } from '../utils'
import { useOwner } from '../OwnerContext'

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
  const [createTrigger, setCreateTrigger] = useState(null)
  const isOwner = useOwner()
  const isUnfiled = selectedFolderId === UNFILED
  const selectedFolder = (!isUnfiled && selectedFolderId) ? getFolderById(folders, selectedFolderId) : null
  const folderCards = isUnfiled
    ? getUnfiledCards(folders, cards)
    : selectedFolder
      ? selectedFolder.children.filter(c => typeof c === 'string').map(id => cards[id]).filter(Boolean)
      : []
  const pathWithIds = (!isUnfiled && selectedFolderId) ? getFolderPathWithIds(folders, selectedFolderId) : null
  const inboxCount = getUnfiledCards(folders, cards).length

  return (
    <div className="files" data-panel={selectedFolderId ? 'content' : 'tree'}>
      <div className="files-tree">
        <div
          className={`tree-inbox-row${isUnfiled ? ' selected' : ''}`}
          onClick={() => onSelectFolder(UNFILED)}
        >
          <span className="tree-inbox-name">Inbox</span>
          {inboxCount > 0 && <span className="tree-inbox-count">{inboxCount}</span>}
          {isOwner && (
            <button
              className="tree-inbox-add"
              onClick={e => {
                e.stopPropagation()
                const folderId = (selectedFolderId && selectedFolderId !== UNFILED) ? selectedFolderId : null
                setCreateTrigger({ folderId, ts: Date.now() })
              }}
            >+</button>
          )}
        </div>
        <FolderTree
          folders={folders}
          selectedId={selectedFolderId}
          onSelect={onSelectFolder}
          onAddFolder={onAddFolder}
          onRenameFolder={onRenameFolder}
          onDeleteFolder={onDeleteFolder}
          onMoveCard={onMoveCard}
          triggerCreate={createTrigger}
        />
      </div>

      <div className="files-content">
        {(selectedFolder || isUnfiled) && (
          <>
            <div className="files-content-header">
              <button className="files-mobile-back" onClick={() => onSelectFolder(null)}>‹</button>
              <nav className="files-breadcrumb-nav">
                {isUnfiled ? (
                  <span className="files-breadcrumb-item active">Inbox</span>
                ) : (
                  pathWithIds?.map((seg, i, arr) => (
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
                )}
              </nav>
            </div>
            {folderCards.map(card => {
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
          </>
        )}
      </div>
    </div>
  )
}
