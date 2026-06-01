import { useState, useEffect, useRef } from 'react'

const NAV_H = 52
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const SCROLL_PER_ITEM = 280
const ITEM_GAP = 56

function buildSubtitle(segments) {
  const seg = (segments || []).find(s => s.type !== 'context')
  return seg ? seg.text.trim().slice(0, 220) : ''
}

function AccentTitle({ title, accentProgress }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        fontFamily: 'var(--display)',
        fontSize: 'clamp(28px, 3.5vw, 46px)',
        fontWeight: 400,
        lineHeight: 1.12,
        letterSpacing: '-0.02em',
        color: 'var(--ink)',
        margin: 0,
      }}>{title}</div>
      <div style={{
        height: 2,
        borderRadius: 1,
        background: 'linear-gradient(90deg, var(--accent), var(--accent-line))',
        width: `${accentProgress * 38}%`,
        marginTop: 10,
        transition: 'width 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }} />
    </div>
  )
}

export default function Cuts({ cards, onCardClick }) {
  const all    = Object.values(cards).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
  const pinned = all.filter(c => c.pinned)
  const rest   = all.filter(c => !c.pinned)
  const list   = [...pinned, ...rest]

  const outerRef    = useRef(null)
  const innerRef    = useRef(null)
  const rafRef      = useRef(null)
  const [activeIndex,    setActiveIndex]    = useState(0)
  const [viewportH,      setViewportH]      = useState(window.innerHeight)
  const [itemPositions,  setItemPositions]  = useState([])

  const panelH         = viewportH - NAV_H
  const totalScroll    = (list.length - 1) * SCROLL_PER_ITEM
  const outerHeight    = panelH + totalScroll

  useEffect(() => {
    const update = () => setViewportH(window.innerHeight)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const tick = () => {
      const outer = outerRef.current
      if (outer) {
        const scrolled = -outer.getBoundingClientRect().top
        setActiveIndex(Math.max(0, Math.min(list.length - 1, scrolled / SCROLL_PER_ITEM)))
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [list.length])

  const measureItems = () => {
    const el = innerRef.current
    if (!el) return
    setItemPositions(Array.from(el.children).map(c => ({ top: c.offsetTop, height: c.offsetHeight })))
  }

  useEffect(() => {
    measureItems()
    const el = innerRef.current
    if (!el) return
    const obs = new ResizeObserver(measureItems)
    obs.observe(el)
    return () => obs.disconnect()
  }, [list.length])

  let centerOffset = panelH / 2
  if (itemPositions.length === list.length && list.length > 0) {
    const lo   = Math.min(Math.floor(activeIndex), list.length - 1)
    const hi   = Math.min(lo + 1, list.length - 1)
    const frac = activeIndex - lo
    const top  = itemPositions[lo].top  + (itemPositions[hi].top  - itemPositions[lo].top)  * frac
    const h    = itemPositions[lo].height + (itemPositions[hi].height - itemPositions[lo].height) * frac
    centerOffset = panelH / 2 - top - h / 2
  }

  if (!list.length) return null

  return (
    <div ref={outerRef} style={{ width: '100%', height: outerHeight, position: 'relative' }}>
      <div style={{
        position: 'sticky',
        top: NAV_H,
        height: panelH,
        width: '100%',
        overflow: 'hidden',
      }}>
        <div
          ref={innerRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: ITEM_GAP,
            padding: '0 clamp(32px, 8vw, 120px)',
            boxSizing: 'border-box',
            maxWidth: 860,
            margin: '0 auto',
            transform: `translateY(${centerOffset}px)`,
            willChange: 'transform',
            transition: 'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {list.map((card, i) => {
            const dist      = Math.abs(i - activeIndex)
            const opacity   = Math.max(0.04, 1 - dist * 0.88)
            const scale     = Math.max(0.95, 1 - dist * 0.022)
            const accentProg = Math.max(0, 1 - dist * 1.4)
            const subtitle  = buildSubtitle(card.segments)
            const isActive  = dist < 0.6

            const d = card.createdAt ? new Date(card.createdAt) : null

            return (
              <div
                key={card.id}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  opacity,
                  transform: `scale(${scale})`,
                  transformOrigin: 'left center',
                  willChange: 'transform, opacity',
                  transition: 'opacity 0.22s ease, transform 0.22s ease',
                  cursor: isActive ? 'pointer' : 'default',
                }}
                onClick={() => { if (isActive) onCardClick(card.id) }}
              >
                {card.pinned && (
                  <svg
                    width="11" height="26" viewBox="0 0 11 26" fill="none"
                    style={{ position: 'absolute', left: -20, top: 0 }}
                  >
                    <ellipse cx="5.5" cy="4.5" rx="5" ry="3.5" fill="var(--accent)" />
                    <ellipse cx="4" cy="3.2" rx="1.8" ry="1.1" fill="white" opacity="0.25" />
                    <rect x="4" y="7.5" width="3" height="4" rx="1" fill="var(--accent)" opacity="0.8" />
                    <line x1="5.5" y1="11.5" x2="5.5" y2="25" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 9,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--faint)',
                  }}>
                    {[card.author, card.year].filter(Boolean).join(' · ')}
                  </div>

                  <AccentTitle title={card.tagline} accentProgress={accentProg} />

                  {subtitle && (
                    <div style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: 'var(--muted)',
                      maxWidth: '52ch',
                    }}>
                      {subtitle}
                    </div>
                  )}
                </div>

                {d && (
                  <div style={{ flexShrink: 0, textAlign: 'right', paddingTop: 2 }}>
                    <div style={{
                      fontFamily: 'var(--display)',
                      fontSize: 36,
                      fontWeight: 400,
                      lineHeight: 1,
                      color: 'var(--ink)',
                      opacity: 0.65,
                      letterSpacing: '-0.02em',
                    }}>{d.getDate()}</div>
                    <div style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 9,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--faint)',
                      marginTop: 3,
                    }}>{MONTHS[d.getMonth()]}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
