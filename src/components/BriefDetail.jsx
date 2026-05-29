import { useState } from 'react'
import { useOwner } from '../OwnerContext'

function CardPickerOverlay({ cards, currentIds, onAdd, onClose }) {
  const all = Object.values(cards)

  return (
    <div className="picker-backdrop" onClick={onClose}>
      <div className="picker" onClick={e => e.stopPropagation()}>
        <div className="picker-header">
          <span>add a card</span>
          <button className="modal-dismiss" style={{ position: 'static', fontSize: 16 }} onClick={onClose}>×</button>
        </div>
        {all.map(card => {
          const taken = currentIds.includes(card.id)
          return (
            <div
              key={card.id}
              className={`picker-item${taken ? ' taken' : ''}`}
              onClick={() => { if (!taken) { onAdd(card.id); onClose() } }}
            >
              <div className="picker-tagline">{card.tagline}</div>
              <div className="picker-meta">{card.author}&ensp;{card.year}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function BriefEditModal({ brief, onClose, onSave, onDelete }) {
  const [name, setName] = useState(brief.name)
  const [desc, setDesc] = useState(brief.description || '')

  function handleSave() {
    if (!name.trim()) return
    onSave({ name: name.trim(), description: desc.trim() })
  }

  function handleKey(e) {
    if (e.key === 'Escape') onClose()
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSave()
    e.stopPropagation()
  }

  return (
    <div className="brief-editor-backdrop" onClick={onClose}>
      <div className="brief-editor" onClick={e => e.stopPropagation()} onKeyDown={handleKey}>
        <button className="modal-dismiss" onClick={onClose}>×</button>
        <div className="editor-field" style={{ marginBottom: 20 }}>
          <div className="editor-label">Name</div>
          <input
            className="editor-input"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <div className="editor-underline" />
        </div>
        <div className="editor-field" style={{ marginBottom: 28 }}>
          <div className="editor-label">Description</div>
          <textarea
            className="editor-input editor-textarea"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            rows={3}
          />
          <div className="editor-underline" />
        </div>
        <div className="editor-footer">
          <button className="editor-save-btn" onClick={handleSave}>save</button>
          <button className="editor-cancel-btn" onClick={onClose}>cancel</button>
          <button className="editor-delete-btn" onClick={onDelete}>delete</button>
        </div>
      </div>
    </div>
  )
}

export default function BriefDetail({ brief, cards, onBack, onUpdate, onDelete, onCardClick }) {
  const [dragIdx, setDragIdx] = useState(null)
  const [overIdx, setOverIdx] = useState(null)
  const [showPicker, setShowPicker] = useState(false)
  const [showEdit,   setShowEdit]   = useState(false)
  const isOwner = useOwner()

  const cardList = brief.cardIds.map(id => cards[id]).filter(Boolean)

  function handleDragStart(e, i) {
    setDragIdx(i)
    e.dataTransfer.effectAllowed = 'move'
  }

  function handleDragOver(e, i) {
    e.preventDefault()
    if (i !== overIdx) setOverIdx(i)
  }

  function handleDrop(e, i) {
    e.preventDefault()
    if (dragIdx === null || dragIdx === i) { setDragIdx(null); setOverIdx(null); return }
    const ids = [...brief.cardIds]
    const [moved] = ids.splice(dragIdx, 1)
    ids.splice(i, 0, moved)
    onUpdate({ cardIds: ids })
    setDragIdx(null)
    setOverIdx(null)
  }

  function handleDragEnd() {
    setDragIdx(null)
    setOverIdx(null)
  }

  function removeCard(id) {
    onUpdate({ cardIds: brief.cardIds.filter(c => c !== id) })
  }

  function addCard(id) {
    onUpdate({ cardIds: [...brief.cardIds, id] })
  }

  return (
    <div className="briefs page">
      <div className="brief-detail">
        <div className="brief-detail-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="brief-back" onClick={onBack}>‹</button>
            <div className="brief-detail-name">{brief.name}</div>
          </div>
          {isOwner && (
            <div className="brief-detail-actions">
              <button className="brief-action-btn" onClick={() => setShowEdit(true)}>edit</button>
            </div>
          )}
        </div>

        {brief.description && (
          <p className="brief-detail-desc">{brief.description}</p>
        )}

        <div className="brief-rule" />

        {cardList.map((card, i) => (
          <div
            key={card.id}
            className={`brief-card-item${isOwner && overIdx === i && dragIdx !== i ? ' drag-over' : ''}`}
            draggable={isOwner}
            onDragStart={isOwner ? e => handleDragStart(e, i) : undefined}
            onDragOver={isOwner ? e => handleDragOver(e, i) : undefined}
            onDrop={isOwner ? e => handleDrop(e, i) : undefined}
            onDragEnd={isOwner ? handleDragEnd : undefined}
          >
            {isOwner && <span className="brief-card-handle" title="drag to reorder">⠿</span>}
            <div className="brief-card-body" onClick={() => onCardClick(card.id)}>
              <div className="brief-card-tagline">{card.tagline}</div>
              <div className="brief-card-meta">{card.author}&ensp;{card.year}</div>
            </div>
            {isOwner && (
              <button
                className="brief-card-remove"
                onClick={e => { e.stopPropagation(); removeCard(card.id) }}
              >
                ×
              </button>
            )}
          </div>
        ))}

        {isOwner && (
          <button className="brief-add-card" onClick={() => setShowPicker(true)}>
            + add card
          </button>
        )}
      </div>

      {showPicker && (
        <CardPickerOverlay
          cards={cards}
          currentIds={brief.cardIds}
          onAdd={addCard}
          onClose={() => setShowPicker(false)}
        />
      )}

      {showEdit && (
        <BriefEditModal
          brief={brief}
          onClose={() => setShowEdit(false)}
          onSave={updates => { onUpdate(updates); setShowEdit(false) }}
          onDelete={() => { onDelete(); setShowEdit(false) }}
        />
      )}
    </div>
  )
}
