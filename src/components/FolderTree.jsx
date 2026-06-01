import { useState, useRef, useEffect } from 'react'
import { useOwner } from '../OwnerContext'

function InlineInput({ defaultValue = '', placeholder = 'folder name', onConfirm, onCancel }) {
  const [val, setVal] = useState(defaultValue)
  const ref = useRef(null)
  const committed = useRef(false)
  useEffect(() => { ref.current?.focus(); ref.current?.select() }, [])

  function commit() {
    if (committed.current) return
    committed.current = true
    if (val.trim()) onConfirm(val.trim())
    else onCancel()
  }

  function handleKey(e) {
    if (e.key === 'Enter') { e.preventDefault(); commit() }
    if (e.key === 'Escape') { committed.current = true; onCancel() }
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
      style={{ background: 'transparent', fontSize: 13 }}
    />
  )
}

const FONT_SIZES = [28, 20, 15, 13]

function FolderNode({
  folder, depth, selectedId, expandedIds, hoveredId, onHover,
  onSelect, onAddSub, onRename, onDelete, onDrop, onAddFolder,
  creatingIn, renamingId,
  setCreatingIn, setRenamingId,
}) {
  const [dragOver, setDragOver] = useState(false)
  const isOwner = useOwner()

  const isExpanded   = expandedIds.has(folder.id)
  const isSelected   = folder.id === selectedId
  const isHovered    = folder.id === hoveredId
  const subFolders   = folder.children.filter(c => typeof c === 'object')
  const cardCount    = folder.children.filter(c => typeof c === 'string').length
  const isEmpty      = folder.children.length === 0
  const isRenaming   = renamingId === folder.id
  const isCreatingIn = creatingIn === folder.id

  const fontSize = FONT_SIZES[Math.min(depth, FONT_SIZES.length - 1)]
  const isActive = isSelected || isHovered
  const opacity = isActive ? 1 : hoveredId ? 0.2 : selectedId && !isSelected ? 0.5 : 0.65

  function handleDragOver(e) { e.preventDefault(); e.stopPropagation(); setDragOver(true) }
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
        className={`gallery-tree-row${dragOver ? ' drag-over' : ''}`}
        style={{ paddingLeft: 20 + depth * 20, opacity, transition: 'opacity 0.18s ease' }}
        onClick={e => { e.stopPropagation(); onSelect(folder.id) }}
        onMouseEnter={() => onHover(folder.id)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <span
          className={`tree-chevron${isExpanded ? ' open' : ''}`}
          style={{ fontSize: 10, width: 18, flexShrink: 0, visibility: subFolders.length > 0 ? 'visible' : 'hidden' }}
          onClick={e => { e.stopPropagation(); onSelect(folder.id, true) }}
        >›</span>

        {isOwner && isRenaming ? (
          <InlineInput
            defaultValue={folder.name}
            onConfirm={name => { onRename(folder.id, name); setRenamingId(null) }}
            onCancel={() => setRenamingId(null)}
          />
        ) : (
          <span
            className="gallery-tree-name"
            style={{
              fontSize,
              fontFamily: depth < 2 ? 'var(--display)' : 'var(--sans)',
              fontWeight: depth < 2 ? 400 : 500,
              color: isSelected ? 'var(--accent)' : 'var(--ink)',
              letterSpacing: depth === 0 ? '-0.02em' : depth === 1 ? '-0.01em' : '0',
              transition: 'color 0.15s ease',
            }}
            onDoubleClick={isOwner ? e => { e.stopPropagation(); setRenamingId(folder.id) } : undefined}
          >
            {folder.name}
          </span>
        )}

        {cardCount > 0 && !isRenaming && (
          <span className="gallery-tree-count">{cardCount}</span>
        )}

        {isOwner && !isRenaming && (
          <div className="tree-actions">
            <button
              className="tree-action-btn"
              title="New subfolder"
              onClick={e => { e.stopPropagation(); onAddSub(folder.id) }}
            >+</button>
            {isEmpty && (
              <button
                className="tree-action-btn"
                title="Delete folder"
                onClick={e => { e.stopPropagation(); onDelete(folder.id) }}
              >×</button>
            )}
          </div>
        )}
      </div>

      {isExpanded && (
        <div>
          {subFolders.map(sub => (
            <FolderNode
              key={sub.id}
              folder={sub}
              depth={depth + 1}
              selectedId={selectedId}
              expandedIds={expandedIds}
              hoveredId={hoveredId}
              onHover={onHover}
              onSelect={onSelect}
              onAddSub={onAddSub}
              onRename={onRename}
              onDelete={onDelete}
              onDrop={onDrop}
              onAddFolder={onAddFolder}
              creatingIn={creatingIn}
              renamingId={renamingId}
              setCreatingIn={setCreatingIn}
              setRenamingId={setRenamingId}
            />
          ))}

          {isCreatingIn && (
            <div className="tree-create" style={{ paddingLeft: 20 + (depth + 1) * 20 }}>
              <InlineInput
                key={`create-${folder.id}`}
                onConfirm={name => { onAddFolder(folder.id, name); setCreatingIn(null) }}
                onCancel={() => setCreatingIn(null)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function FolderTree({
  folders, selectedId, onSelect, onAddFolder,
  onRenameFolder, onDeleteFolder, onMoveCard,
  hoveredId, onHover,
}) {
  const [expandedIds,    setExpandedIds]    = useState(new Set())
  const [creatingIn,     setCreatingIn]     = useState(undefined)
  const [renamingId,     setRenamingId]     = useState(null)
  const [showRootInput,  setShowRootInput]  = useState(false)
  const [rootInputKey,   setRootInputKey]   = useState(0)
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
    expand(parentId)
    setCreatingIn(parentId)
  }

  function handleRootConfirm(name) {
    onAddFolder(null, name)
    setShowRootInput(false)
    setRootInputKey(k => k + 1)
  }

  return (
    <div onMouseLeave={() => onHover(null)}>
      {folders.map(folder => (
        <FolderNode
          key={folder.id}
          folder={folder}
          depth={0}
          selectedId={selectedId}
          expandedIds={expandedIds}
          hoveredId={hoveredId}
          onHover={onHover}
          onSelect={handleSelect}
          onAddSub={handleAddSub}
          onRename={onRenameFolder}
          onDelete={onDeleteFolder}
          onDrop={onMoveCard}
          onAddFolder={onAddFolder}
          creatingIn={creatingIn}
          renamingId={renamingId}
          setCreatingIn={setCreatingIn}
          setRenamingId={setRenamingId}
        />
      ))}

      {isOwner && showRootInput && (
        <div className="tree-create" style={{ paddingLeft: 20 }}>
          <InlineInput
            key={rootInputKey}
            onConfirm={handleRootConfirm}
            onCancel={() => setShowRootInput(false)}
          />
        </div>
      )}

      {isOwner && !showRootInput && (
        <div className="tree-new-root" onClick={() => setShowRootInput(true)}>
          <span style={{ fontSize: 14, fontWeight: 300, lineHeight: 1 }}>+</span>
          <span>new folder</span>
        </div>
      )}
    </div>
  )
}
