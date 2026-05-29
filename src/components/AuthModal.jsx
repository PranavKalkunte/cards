import { useState, useEffect, useRef } from 'react'

export default function AuthModal({ onAuth, onClose }) {
  const [val, setVal] = useState('')
  const [err, setErr] = useState(false)
  const ref = useRef(null)

  useEffect(() => { ref.current?.focus() }, [])

  async function handleSubmit() {
    const ok = await onAuth(val)
    if (ok) {
      onClose()
    } else {
      setErr(true)
      setVal('')
      setTimeout(() => setErr(false), 1200)
    }
  }

  function handleKey(e) {
    e.stopPropagation()
    if (e.key === 'Enter') handleSubmit()
    if (e.key === 'Escape') onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="auth-modal"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKey}
      >
        <input
          ref={ref}
          className={`auth-input${err ? ' auth-error' : ''}`}
          type="password"
          value={val}
          onChange={e => { setVal(e.target.value); setErr(false) }}
          placeholder="passphrase"
        />
      </div>
    </div>
  )
}
