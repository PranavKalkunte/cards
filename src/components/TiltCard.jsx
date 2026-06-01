import { useRef, useState, useCallback, useEffect, startTransition } from "react"

function lerp(a, b, t) { return a + (b - a) * t }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)) }

const ACCENT_WIDTHS = ["40%", "55%", "30%", "48%", "36%", "52%"]

export default function TiltCard({ brief, index, onClick }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [target, setTarget] = useState({ x: 0, y: 0 })
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    let running = true
    function animate() {
      setTilt(prev => ({
        x: lerp(prev.x, target.x, 0.18),
        y: lerp(prev.y, target.y, 0.18),
      }))
      if (running) requestAnimationFrame(animate)
    }
    const frame = requestAnimationFrame(animate)
    return () => { running = false; cancelAnimationFrame(frame) }
  }, [target.x, target.y])

  const handleMouseMove = useCallback(e => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = clamp((e.clientX - rect.left) / rect.width * 2 - 1, -1, 1)
    const py = clamp((e.clientY - rect.top) / rect.height * 2 - 1, -1, 1)
    startTransition(() => setTarget({ x: py * 14, y: px * 18 }))
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHover(false)
    startTransition(() => setTarget({ x: 0, y: 0 }))
  }, [])

  const accentWidth = ACCENT_WIDTHS[index % ACCENT_WIDTHS.length]

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHover(true)}
      style={{
        width: 280,
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        background: "var(--surface)",
        border: `1px solid ${isHover ? "var(--accent-line)" : "var(--rule)"}`,
        boxShadow: isHover
          ? "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 2px 10px rgba(0,0,0,0.05)",
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        willChange: "transform",
        cursor: "pointer",
        transition: "box-shadow 0.2s cubic-bezier(.4,.2,.2,1), border-color 0.2s ease",
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      {/* accent top bar */}
      <div style={{ height: 3, background: "var(--accent)", width: accentWidth, borderRadius: "0 0 2px 0" }} />

      <div style={{
        padding: "20px 22px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}>
        <div style={{
          fontFamily: "var(--display)",
          fontSize: 20,
          fontWeight: 400,
          color: "var(--ink)",
          lineHeight: 1.2,
          letterSpacing: "-0.015em",
        }}>{brief.name}</div>
        {brief.description && (
          <div style={{
            fontFamily: "var(--serif)",
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}>{brief.description}</div>
        )}
      </div>

      <div style={{
        padding: "12px 22px 20px",
        borderTop: "1px solid var(--rule)",
        display: "flex",
        alignItems: "baseline",
        gap: 5,
      }}>
        <span style={{
          fontFamily: "var(--display)",
          fontSize: 36,
          fontWeight: 400,
          color: "var(--accent)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}>{brief.cardIds.length}</span>
        <span style={{
          fontFamily: "var(--mono)",
          fontSize: 9,
          color: "var(--faint)",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
        }}>card{brief.cardIds.length !== 1 ? "s" : ""}</span>
      </div>
    </div>
  )
}
