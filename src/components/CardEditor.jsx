import { useState, useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { getAllFolders, getCardFolderId } from '../utils'

function segmentsToWords(segments) {
  if (!segments) return []
  const words = []
  for (const seg of segments) {
    for (const token of (seg.text.match(/\S+\s*|\s+/g) || [])) {
      words.push({ text: token, type: seg.type })
    }
  }
  return words
}

function wordsToSegments(words) {
  const segs = []
  let cur = null
  for (const w of words) {
    if (!cur || cur.type !== w.type) { cur = { text: w.text, type: w.type }; segs.push(cur) }
    else cur.text += w.text
  }
  return segs
}

function mergeWords(oldWords, newText) {
  const tokens = newText.match(/\S+\s*|\s+/g) || []
  return tokens.map((token, i) => {
    const old = oldWords[i]
    if (old && old.text === token) return old
    return { text: token, type: 'context' }
  })
}

function getCaretPos(el) {
  try {
    const sel = window.getSelection()
    if (!sel || !sel.rangeCount) return null
    const range = sel.getRangeAt(0).cloneRange()
    range.selectNodeContents(el)
    range.setEnd(sel.getRangeAt(0).endContainer, sel.getRangeAt(0).endOffset)
    return range.toString().length
  } catch {
    return null
  }
}

function setCaretPos(el, pos) {
  const sel = window.getSelection()
  if (!sel) return
  const range = document.createRange()
  let rem = pos
  let found = false
  function walk(node) {
    if (found) return
    if (node.nodeType === 3) {
      if (rem <= node.length) { range.setStart(node, rem); range.setEnd(node, rem); found = true }
      else rem -= node.length
    } else { for (const c of node.childNodes) walk(c) }
  }
  walk(el)
  if (found) { sel.removeAllRanges(); sel.addRange(range) }
}

function TagInput({ tagIds, allTags, onChange }) {
  const [val, setVal] = useState('')
  const ref = useRef(null)

  const currentTags = tagIds.map(id =>
    allTags[id] || { id, name: id.replace(/^tg-/, '').replace(/-/g, ' ') }
  )

  function addTag() {
    const trimmed = val.trim()
    if (!trimmed) return
    const id = 'tg-' + trimmed.toLowerCase().replace(/\s+/g, '-')
    if (!tagIds.includes(id)) onChange([...tagIds, id])
    setVal('')
  }

  function removeTag(id) { onChange(tagIds.filter(t => t !== id)) }

  function handleKey(e) {
    if (e.key === 'Enter') { e.preventDefault(); addTag(); return }
    if (e.key === 'Backspace' && !val && tagIds.length) removeTag(tagIds[tagIds.length - 1])
  }

  return (
    <div className="tags-input-wrap" onClick={() => ref.current?.focus()}>
      {currentTags.map(tag => (
        <span
          key={tag.id}
          className="tag-pill-mono"
          onClick={e => { e.stopPropagation(); removeTag(tag.id) }}
        >
          {tag.name} ×
        </span>
      ))}
      <input
        ref={ref}
        className="tag-text-input"
        value={val}
        onChange={e => setVal(e.target.value)}
        onKeyDown={handleKey}
        placeholder={tagIds.length === 0 ? 'type and press enter' : ''}
      />
    </div>
  )
}

function FolderPicker({ folders, selectedId, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const options = getAllFolders(folders)
  const selected = options.find(o => o.id === selectedId)

  useEffect(() => {
    if (!open) return
    function handleClick(e) { if (!ref.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div className="folder-picker-wrap" ref={ref}>
      <div className="folder-picker-trigger" onClick={() => setOpen(o => !o)}>
        <span className="folder-picker-trigger-label">
          {selected ? selected.label : 'Inbox'}
        </span>
        <span className="folder-picker-trigger-chevron">{open ? '▾' : '›'}</span>
      </div>
      {open && (
        <div className="folder-picker-dropdown">
          <div
            className={`folder-picker-item folder-picker-none${!selectedId ? ' active' : ''}`}
            onClick={() => { onChange(null); setOpen(false) }}
          >
            Inbox
          </div>
          {options.map(opt => (
            <div
              key={opt.id}
              className={`folder-picker-item${selectedId === opt.id ? ' active' : ''}`}
              style={{ paddingLeft: 14 + opt.depth * 14 }}
              onClick={() => { onChange(opt.id); setOpen(false) }}
            >
              {opt.label.split(' / ').pop()}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const MODES = ['context', 'highlight', 'power']

function WordSpans({ words, paintMode, isDragging, dragStart, dragEnd, onWordDown, onWordEnter }) {
  return words.map((word, i) => {
    const lo = dragStart.current !== null ? Math.min(dragStart.current, dragEnd.current) : -1
    const hi = dragStart.current !== null ? Math.max(dragStart.current, dragEnd.current) : -1
    const isBrushed = isDragging.current && i >= lo && i <= hi
    const displayType = isBrushed ? applyMode(word.type, paintMode) : word.type
    return (
      <span
        key={i}
        className={`paint-word word-${displayType}`}
        onMouseDown={e => onWordDown(e, i)}
        onMouseEnter={() => onWordEnter(i)}
      >
        {word.text}
      </span>
    )
  })
}

function CanvasWords(props) {
  return <div className="editor-canvas"><WordSpans {...props} /></div>
}

function UnifiedCanvas({ words, paintMode, isDragging, dragStart, dragEnd, onWordDown, onWordEnter, onTextChange }) {
  const ref = useRef(null)
  const savedCaret = useRef(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    // Remove browser-inserted nodes React doesn't track: phantom <br>, stray
    // text nodes, and empty spans Chrome leaves behind after full deletion.
    for (const node of [...ref.current.childNodes]) {
      if (node.nodeName !== 'SPAN' || !node.textContent) ref.current.removeChild(node)
    }
    if (savedCaret.current !== null) {
      if (ref.current.contains(document.activeElement) || ref.current === document.activeElement) {
        setCaretPos(ref.current, savedCaret.current)
      }
      savedCaret.current = null
    }
  })

  function handleInput(e) {
    savedCaret.current = getCaretPos(ref.current)
    const text = e.currentTarget.innerText.replace(/ /g, ' ')
    onTextChange(text)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      document.execCommand('insertLineBreak')
    }
  }

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className="editor-unified-canvas"
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    >
      <WordSpans words={words} paintMode={paintMode} isDragging={isDragging} dragStart={dragStart} dragEnd={dragEnd} onWordDown={onWordDown} onWordEnter={onWordEnter} />
    </div>
  )
}

function applyMode(currentType, mode) {
  if (mode === 'context') return 'context'
  const hasU = currentType === 'highlight' || currentType === 'both'
  const hasB = currentType === 'power'     || currentType === 'both'
  const newU = mode === 'highlight' ? true : hasU
  const newB = mode === 'power'     ? true : hasB
  if (newU && newB) return 'both'
  if (newU) return 'highlight'
  if (newB) return 'power'
  return 'context'
}

export default function CardEditor({ card, folders, tags, onClose, onSave, onDelete }) {
  const [author,    setAuthor]    = useState(card?.author    || '')
  const [year,      setYear]      = useState(card?.year      || '')
  const [source,    setSource]    = useState(card?.source    || '')
  const [sourceUrl, setSourceUrl] = useState(card?.sourceUrl || '')
  const [tagline,   setTagline]   = useState(card?.tagline   || '')
  const [tagIds,    setTagIds]    = useState(card?.tagIds    || [])
  const [pinned,    setPinned]    = useState(card?.pinned    || false)

  const initialFolder = card?.id ? getCardFolderId(folders, card.id) : null
  const [selectedFolderId, setSelectedFolderId] = useState(initialFolder)

  const [words,      setWords]      = useState(() => card ? segmentsToWords(card.segments) : [])
  const [paintMode,  setPaintMode]  = useState('highlight')
  const [fullCanvas, setFullCanvas] = useState(false)

  const isDragging = useRef(false)
  const dragStart  = useRef(null)
  const dragEnd    = useRef(null)
  const [, tick]   = useState(0)

  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  const applyBrush = useCallback(() => {
    if (dragStart.current === null) return
    const lo = Math.min(dragStart.current, dragEnd.current)
    const hi = Math.max(dragStart.current, dragEnd.current)
    if (isDragging.current) {
      setWords(prev => prev.map((w, i) => {
        if (i < lo || i > hi) return w
        return { ...w, type: applyMode(w.type, paintMode) }
      }))
    }
    dragStart.current  = null
    dragEnd.current    = null
    isDragging.current = false
    tick(n => n + 1)
  }, [paintMode])

  useEffect(() => {
    const onUp = () => { if (dragStart.current !== null) applyBrush() }
    window.addEventListener('mouseup', onUp)
    return () => window.removeEventListener('mouseup', onUp)
  }, [applyBrush])

  function handleWordDown(_e, i) {
    dragStart.current  = i
    dragEnd.current    = i
    isDragging.current = false
    tick(n => n + 1)
  }

  function handleWordEnter(i) {
    if (dragStart.current === null) return
    if (i !== dragStart.current && !isDragging.current) {
      isDragging.current = true
      window.getSelection()?.removeAllRanges()
    }
    dragEnd.current = i
    tick(n => n + 1)
  }

  function handleTextChange(text) {
    setWords(prev => text.trim() ? mergeWords(prev, text) : [])
  }

  function handleSave() {
    onSave({
      id: card?.id || String(Date.now()),
      author, year, source, sourceUrl: sourceUrl || null,
      tagline, tagIds, pinned,
      segments: wordsToSegments(words),
    }, selectedFolderId)
  }

  return (
    <div className="editor-backdrop" onClick={onClose}>
      <div className="editor" onClick={e => e.stopPropagation()}>
        <button className="modal-dismiss" onClick={onClose}>×</button>

        {/* Left panel: meta fields */}
        <div className="modal-left">
          <div className="editor-field">
            <div className="editor-label">Author</div>
            <input className="editor-input" value={author} onChange={e => setAuthor(e.target.value)} />
            <div className="editor-underline" />
          </div>

          <div className="editor-field">
            <div className="editor-label">Year</div>
            <input className="editor-input" value={year} onChange={e => setYear(e.target.value)} />
            <div className="editor-underline" />
          </div>

          <div className="editor-field">
            <div className="editor-label">Source</div>
            <input className="editor-input" value={source} onChange={e => setSource(e.target.value)} />
            <div className="editor-underline" />
          </div>

          <div className="editor-field">
            <div className="editor-label">Source URL</div>
            <input className="editor-input" value={sourceUrl} onChange={e => setSourceUrl(e.target.value)} />
            <div className="editor-underline" />
          </div>

          <div className="editor-field">
            <div className="editor-label">Folder</div>
            <FolderPicker folders={folders} selectedId={selectedFolderId} onChange={setSelectedFolderId} />
          </div>

          <div className="editor-field">
            <div className="editor-label">Tags</div>
            <TagInput tagIds={tagIds} allTags={tags} onChange={setTagIds} />
            <div className="editor-underline" style={{ marginTop: 6 }} />
          </div>

          <div className="editor-pin-row">
            <div
              className={`editor-pin-toggle${pinned ? ' on' : ''}`}
              onClick={() => setPinned(p => !p)}
            />
            <span className="editor-pin-label" onClick={() => setPinned(p => !p)}>
              pin to top
            </span>
          </div>

          <div className="editor-footer" style={{ marginTop: 'auto', paddingTop: 'var(--s-8)' }}>
            <button className="editor-save-btn" onClick={handleSave}>save</button>
            <button className="editor-cancel-btn" onClick={onClose}>cancel</button>
            {onDelete && (
              <button className="editor-delete-btn" onClick={onDelete}>delete</button>
            )}
          </div>
        </div>

        {/* Right panel: tagline + paint canvas */}
        <div className="modal-right">
          <div className="editor-field">
            <div className="editor-label">Tagline</div>
            <textarea
              className="editor-input editor-tagline-input"
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              rows={3}
              placeholder="The key line…"
            />
          </div>

          <div className="editor-field">
            <div className="editor-label">Text</div>
            <div className="editor-modes">
              {MODES.map(m => (
                <button
                  key={m}
                  className={`editor-mode-btn${paintMode === m ? ' active' : ''}`}
                  onClick={() => setPaintMode(m)}
                >
                  {m}
                </button>
              ))}
              <span className="editor-mode-spacer" />
              {words.length > 0 && (
                <button className="editor-mode-btn" onClick={() => setFullCanvas(true)}>expand</button>
              )}
            </div>
            <UnifiedCanvas
              words={words} paintMode={paintMode}
              isDragging={isDragging} dragStart={dragStart} dragEnd={dragEnd}
              onWordDown={handleWordDown} onWordEnter={handleWordEnter}
              onTextChange={handleTextChange}
            />
          </div>
        </div>

        {fullCanvas && (
          <div className="canvas-fullview" onClick={() => setFullCanvas(false)}>
            <div className="canvas-fullview-inner" onClick={e => e.stopPropagation()}>
              <div className="editor-modes" style={{ marginBottom: 16 }}>
                {MODES.map(m => (
                  <button
                    key={m}
                    className={`editor-mode-btn${paintMode === m ? ' active' : ''}`}
                    onClick={() => setPaintMode(m)}
                  >
                    {m}
                  </button>
                ))}
                <span className="editor-mode-spacer" />
                <button className="editor-mode-btn" onClick={() => setFullCanvas(false)}>collapse</button>
              </div>
              <CanvasWords
                words={words} paintMode={paintMode}
                isDragging={isDragging} dragStart={dragStart} dragEnd={dragEnd}
                onWordDown={handleWordDown} onWordEnter={handleWordEnter}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
