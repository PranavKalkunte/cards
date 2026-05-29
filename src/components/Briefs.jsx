import { useState } from 'react'
import BriefDetail from './BriefDetail'
import { useOwner } from '../OwnerContext'

function BriefEditorModal({ onClose, onSave }) {
  const [name, setName]   = useState('')
  const [desc, setDesc]   = useState('')

  function handleSave() {
    if (!name.trim()) return
    onSave({
      id: `b-${Date.now()}`,
      name: name.trim(),
      description: desc.trim(),
      cardIds: [],
      createdAt: Date.now(),
    })
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
            placeholder="Brief name"
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
            placeholder="What is this collection about?"
            rows={3}
          />
          <div className="editor-underline" />
        </div>
        <div className="editor-footer">
          <button className="editor-save-btn" onClick={handleSave}>create</button>
          <button className="editor-cancel-btn" onClick={onClose}>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default function Briefs({
  briefs, cards,
  activeBriefId, onSelectBrief,
  onSaveBrief, onUpdateBrief, onDeleteBrief,
  onCardClick,
}) {
  const [showNewBrief, setShowNewBrief] = useState(false)
  const isOwner = useOwner()

  if (activeBriefId && briefs[activeBriefId]) {
    return (
      <BriefDetail
        brief={briefs[activeBriefId]}
        cards={cards}
        onBack={() => onSelectBrief(null)}
        onUpdate={updates => onUpdateBrief(activeBriefId, updates)}
        onDelete={() => onDeleteBrief(activeBriefId)}
        onCardClick={onCardClick}
      />
    )
  }

  const briefList = Object.values(briefs)

  return (
    <div className="briefs page">
      <div className="briefs-grid">
        {briefList.map((brief, i) => (
          <div
            key={brief.id}
            className="brief-sq"
            style={{ animationDelay: `${i * 0.06}s` }}
            onClick={() => onSelectBrief(brief.id)}
          >
            <span className="brief-sq-count">{brief.cardIds.length}</span>
            <div className="brief-sq-name">{brief.name}</div>
            {brief.description && (
              <div className="brief-sq-desc">{brief.description}</div>
            )}
          </div>
        ))}
        {isOwner && <div className="brief-sq-new" onClick={() => setShowNewBrief(true)}>+</div>}
      </div>

      {showNewBrief && (
        <BriefEditorModal
          onClose={() => setShowNewBrief(false)}
          onSave={brief => { onSaveBrief(brief); setShowNewBrief(false) }}
        />
      )}
    </div>
  )
}
