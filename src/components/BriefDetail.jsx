import { useState } from 'react'
import { useOwner } from '../OwnerContext'
import CardStack from './CardStack'

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
  const [showPicker, setShowPicker] = useState(false)
  const [showEdit,   setShowEdit]   = useState(false)
  const [dragIdx,    setDragIdx]    = useState(null)
  const [overIdx,    setOverIdx]    = useState(null)
  const isOwner = useOwner()

  const cardList = brief.cardIds.map(id => cards[id]).filter(Boolean)

  function removeCard(id) {
    onUpdate({ cardIds: brief.cardIds.filter(c => c !== id) })
  }

  function addCard(id) {
    onUpdate({ cardIds: [...brief.cardIds, id] })
  }

  function handleDragStart(e, i) { setDragIdx(i); e.dataTransfer.effectAllowed = 'move' }
  function handleDragOver(e, i)  { e.preventDefault(); if (i !== overIdx) setOverIdx(i) }
  function handleDrop(e, i) {
    e.preventDefault()
    if (dragIdx === null || dragIdx === i) { setDragIdx(null); setOverIdx(null); return }
    const ids = [...brief.cardIds]
    const [moved] = ids.splice(dragIdx, 1)
    ids.splice(i, 0, moved)
    onUpdate({ cardIds: ids })
    setDragIdx(null); setOverIdx(null)
  }
  function handleDragEnd() { setDragIdx(null); setOverIdx(null) }

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

        <CardStack
          items={cardList}
          ratio="3 / 2"
          borderRadius={6}
          offset={8}
          scaleStep={0.05}
          dimStep={0.12}
          style={{ width: '100%' }}
          onFrontClick={card => onCardClick(card.id)}
          renderCard={(card, _index, isFront) => (
            <div style={{
              width: '100%',
              height: '100%',
              background: 'var(--lift)',
              boxSizing: 'border-box',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              userSelect: 'none',
            }}>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '20px',
                lineHeight: 1.35,
                color: 'var(--ink)',
                marginBottom: '10px',
              }}>{card.tagline}</div>
              <div style={{
                width: 32,
                height: 2,
                background: 'var(--accent)',
                borderRadius: 1,
                marginBottom: 10,
              }} />
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '9px',
                color: 'var(--faint)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>{[card.author, card.year].filter(Boolean).join(' · ')}</div>
              {isFront && (
                <div style={{
                  position: 'absolute',
                  bottom: 14,
                  right: 16,
                  fontFamily: 'var(--mono)',
                  fontSize: '9px',
                  color: 'var(--faint)',
                }}>drag to cycle</div>
              )}
            </div>
          )}
        />

        {isOwner && cardList.length > 0 && (
          <div style={{ marginTop: 24 }}>
            {brief.cardIds.map((id, i) => {
              const card = cards[id]
              if (!card) return null
              return (
                <div
                  key={id}
                  className={`brief-card-item${overIdx === i && dragIdx !== i ? ' drag-over' : ''}`}
                  draggable
                  onDragStart={e => handleDragStart(e, i)}
                  onDragOver={e => handleDragOver(e, i)}
                  onDrop={e => handleDrop(e, i)}
                  onDragEnd={handleDragEnd}
                >
                  <span className="brief-card-handle">⠿</span>
                  <div className="brief-card-body" onClick={() => onCardClick(id)}>
                    <div className="brief-card-tagline">{card.tagline}</div>
                    <div className="brief-card-meta">{card.author}&ensp;{card.year}</div>
                  </div>
                  <button
                    className="brief-card-remove"
                    onClick={e => { e.stopPropagation(); removeCard(id) }}
                  >×</button>
                </div>
              )
            })}
            <button className="brief-add-card" onClick={() => setShowPicker(true)}>
              + add card
            </button>
          </div>
        )}

        {isOwner && cardList.length === 0 && (
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
