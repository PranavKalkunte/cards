import { useState, useRef, useEffect } from 'react'
import { useOwner } from '../OwnerContext'

function InlineInput({ defaultValue = '', placeholder = 'folder name', onConfirm, onCancel }) {
  const [val, setVal] = useState(defaultValue)
  const ref = useRef(null)
  useEffect(() => { ref.current?.focus(); ref.current?.select() }, [])

  function commit() {
    if (val.trim()) onConfirm(val.trim())
    else onCancel()
  }

  function handleKey(e) {
    if (e.key === 'Enter') { e.preventDefault(); commit() }
    if (e.key === 'Escape') onCancel()
    e.stopPropagation()
  }

  return (
    <input
      ref={ref}
      className="tree-name"
      value={val}
      placeholder={placeholder}
      onChange={e => setVal(e.target.value)}
      onKeyDown={handleKey}
      onBlur={commit}
      onClick={e => e.stopPropagation()}
      style={{ background: 'transparent' }}
    />
  )
}

function FolderNode({
  folder, depth, selectedId, expandedIds,
  onSelect, onAddSub, onRename, onDelete, onDrop,
  creatingIn, renamingId,
  setCreatingIn, setRenamingId,
}) {
  const [dragOver, setDragOver] = useState(false)
  const isOwner = useOwner()

  const isExpanded   = expandedIds.has(folder.id)
  const isSelected   = folder.id === selectedId
  const subFolders   = folder.children.filter(c => typeof c === 'object')
  const cardCount    = folder.children.filter(c => typeof c === 'string').length
  const isEmpty      = folder.children.length === 0
  const isRenaming   = renamingId === folder.id
  const isCreatingIn = creatingIn === folder.id

  const pl = 14 + depth * 16

  function handleDragOver(e) {
    e.preventDefault(); e.stopPropagation()
    setDragOver(true)
  }
  function handleDragLeave() { setDragOver(false) }
  function handleDrop(e) {
    e.preventDefault(); e.stopPropagation()
    setDragOver(false)
    const cardId = e.dataTransfer.getData('cardId')
    if (cardId) onDrop(cardId, folder.id)
  }

  return (
    <div>
      <div
        className={`tree-row${isSelected ? ' selected' : ''}${dragOver ? ' drag-over' : ''}`}
        style={{ paddingLeft: pl }}
        onClick={e => { e.stopPropagation(); onSelect(folder.id) }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <span
          className={`tree-chevron${isExpanded ? ' open' : ''}`}
          onClick={e => { e.stopPropagation(); onSelect(folder.id, true) }}
        >
          ›
        </span>

        {isOwner && isRenaming ? (
          <InlineInput
            defaultValue={folder.name}
            onConfirm={name => { onRename(folder.id, name); setRenamingId(null) }}
            onCancel={() => setRenamingId(null)}
          />
        ) : (
          <span
            className="tree-name"
            onDoubleClick={isOwner ? e => { e.stopPropagation(); setRenamingId(folder.id) } : undefined}
          >
            {folder.name}
          </span>
        )}

        {!isRenaming && cardCount > 0 && (
          <span className="tree-count">{cardCount}</span>
        )}

        {isOwner && !isRenaming && (
          <div className="tree-actions">
            <button
              className="tree-action-btn"
              title="New subfolder"
              onClick={e => { e.stopPropagation(); onAddSub(folder.id) }}
            >
              +
            </button>
            {isEmpty && (
              <button
                className="tree-action-btn"
                title="Delete folder"
                onClick={e => { e.stopPropagation(); onDelete(folder.id) }}
              >
                ×
              </button>
            )}
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="tree-children">
          {subFolders.map(sub => (
            <FolderNode
              key={sub.id}
              folder={sub}
              depth={depth + 1}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onSelect={onSelect}
              onAddSub={onAddSub}
              onRename={onRename}
              onDelete={onDelete}
              onDrop={onDrop}
              creatingIn={creatingIn}
              renamingId={renamingId}
              setCreatingIn={setCreatingIn}
              setRenamingId={setRenamingId}
            />
          ))}

          {isCreatingIn && (
            <div className="tree-create" style={{ paddingLeft: pl + 22 }}>
              <InlineInput
                onConfirm={name => { setCreatingIn(null); /* handled by parent */ }}
                onCancel={() => setCreatingIn(null)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function FolderTree({ folders, selectedId, onSelect, onAddFolder, onRenameFolder, onDeleteFolder, onMoveCard }) {
  const [expandedIds, setExpandedIds] = useState(new Set())
  const [creatingIn,  setCreatingIn]  = useState(null)
  const [renamingId,  setRenamingId]  = useState(null)
  const isOwner = useOwner()

  function expand(id)   { setExpandedIds(prev => new Set([...prev, id])) }
  function collapse(id) { setExpandedIds(prev => { const n = new Set(prev); n.delete(id); return n }) }

  function handleSelect(id, chevronOnly = false) {
    const isExpanded = expandedIds.has(id)
    if (isExpanded) collapse(id)
    else expand(id)
    if (!chevronOnly) onSelect(id)
  }

  function handleAddSub(parentId) {
    expand(parentId) // ensure parent is open so the input is visible
    setCreatingIn(parentId)
  }

  function handleCreateConfirm(name, parentId) {
    onAddFolder(parentId, name)
    setCreatingIn(null)
  }

  return (
    <div>
      {folders.map(folder => (
        <FolderNode
          key={folder.id}
          folder={folder}
          depth={0}
          selectedId={selectedId}
          expandedIds={expandedIds}
          onSelect={handleSelect}
          onAddSub={handleAddSub}
          onRename={onRenameFolder}
          onDelete={onDeleteFolder}
          onDrop={onMoveCard}
          creatingIn={creatingIn}
          renamingId={renamingId}
          setCreatingIn={setCreatingIn}
          setRenamingId={setRenamingId}
        />
      ))}

      {isOwner && creatingIn === null && (
        <div className="tree-create" style={{ paddingLeft: 14 }}>
          <span className="tree-chevron" style={{ visibility: 'hidden' }}>›</span>
          <InlineInput
            onConfirm={name => handleCreateConfirm(name, null)}
            onCancel={() => setCreatingIn(undefined)}
          />
        </div>
      )}

      {isOwner && (
        <div className="tree-new-root" onClick={() => setCreatingIn(null)}>
          <span style={{ fontSize: 14, fontWeight: 300, lineHeight: 1 }}>+</span>
          <span>new folder</span>
        </div>
      )}
    </div>
  )
}
