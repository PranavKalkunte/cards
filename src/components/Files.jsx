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

function getFolderBreadcrumb(folders, folderId) {
  function search(items, path) {
    for (const f of items) {
      const p = [...path, f.name]
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
  const isUnfiled = selectedFolderId === UNFILED
  const selectedFolder = (!isUnfiled && selectedFolderId) ? getFolderById(folders, selectedFolderId) : null
  const folderCards = isUnfiled
    ? getUnfiledCards(folders, cards)
    : selectedFolder
      ? selectedFolder.children.filter(c => typeof c === 'string').map(id => cards[id]).filter(Boolean)
      : []
  const breadcrumb = isUnfiled ? ['unfiled'] : selectedFolderId ? getFolderBreadcrumb(folders, selectedFolderId) : null

  return (
    <div className="files" data-panel={selectedFolderId ? 'content' : 'tree'}>
      <div className="files-tree">
        <div
          className={`tree-row${isUnfiled ? ' selected' : ''}`}
          style={{ paddingLeft: 14 }}
          onClick={() => onSelectFolder(UNFILED)}
        >
          <span className="tree-chevron" style={{ visibility: 'hidden' }}>›</span>
          <span className="tree-name">unfiled</span>
        </div>
        <FolderTree
          folders={folders}
          selectedId={selectedFolderId}
          onSelect={onSelectFolder}
          onAddFolder={onAddFolder}
          onRenameFolder={onRenameFolder}
          onDeleteFolder={onDeleteFolder}
          onMoveCard={onMoveCard}
        />
      </div>

      <div className="files-content">
        {(selectedFolder || isUnfiled) && (
          <>
            <button className="files-mobile-back" onClick={() => onSelectFolder(null)}>
              ‹ folders
            </button>
            {breadcrumb && (
              <div className="files-breadcrumb">{breadcrumb.join(' / ')}</div>
            )}
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
                  <div className="folder-card-tagline">{card.tagline}</div>
                  <div className="folder-card-meta">{card.author}&ensp;{card.year}</div>
                  {bold.length > 0 && (
                    <p className="card-text" style={{ fontSize: 16 }}>
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
