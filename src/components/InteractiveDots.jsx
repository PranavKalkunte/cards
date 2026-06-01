import { useState, useEffect, useMemo, useRef, startTransition } from "react"

export default function InteractiveDots({
  dotColor = "#9CA3AF",
  dotSize = 4,
  spacing = 60,
  proximityRadius = 150,
  maxOpacity = 1,
  backgroundOpacity = 0.15,
  gridType = "dots-lines",
  fadeDelay = 0,
  thickness = 1.5,
  hoverDarken = 0.3,
  style,
}) {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [activeDots, setActiveDots] = useState(new Set())
  const [fadingDots, setFadingDots] = useState(new Map())

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        startTransition(() => {
          setDimensions({ width: rect.width, height: rect.height })
        })
      }
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      startTransition(() => {
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const dots = useMemo(() => {
    const arr = []
    const cols = Math.ceil(dimensions.width / spacing)
    const rows = Math.ceil(dimensions.height / spacing)
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        arr.push({ x: col * spacing + spacing / 2, y: row * spacing + spacing / 2, key: `${col}-${row}` })
      }
    }
    return arr
  }, [dimensions.width, dimensions.height, spacing])

  const getOpacity = (dotX, dotY) => {
    const distance = Math.sqrt((mousePos.x - dotX) ** 2 + (mousePos.y - dotY) ** 2)
    if (distance > proximityRadius) return backgroundOpacity
    return Math.max(backgroundOpacity, (1 - distance / proximityRadius) * maxOpacity)
  }

  useEffect(() => {
    if (fadeDelay === 0) return
    const newActive = new Set()
    dots.forEach((dot) => {
      const d = Math.sqrt((mousePos.x - dot.x) ** 2 + (mousePos.y - dot.y) ** 2)
      if (d <= proximityRadius) newActive.add(dot.key)
    })
    setActiveDots(newActive)
    setFadingDots((prev) => {
      const next = new Map(prev)
      newActive.forEach((key) => next.delete(key))
      return next
    })
    const toFade = Array.from(activeDots).filter((key) => !newActive.has(key))
    if (toFade.length > 0) {
      const startTime = Date.now()
      startTransition(() => {
        setFadingDots((prev) => {
          const next = new Map(prev)
          toFade.forEach((key) => { if (!next.has(key)) next.set(key, startTime) })
          return next
        })
      })
    }
  }, [mousePos, dots, proximityRadius, fadeDelay])

  useEffect(() => {
    if (fadeDelay === 0 || fadingDots.size === 0) return
    let frame
    const animate = () => {
      const now = Date.now()
      let changed = false
      setFadingDots((prev) => {
        const next = new Map(prev)
        prev.forEach((startTime, key) => {
          if (now - startTime >= fadeDelay) { next.delete(key); changed = true }
        })
        return changed ? next : prev
      })
      if (fadingDots.size > 0) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => { if (frame) cancelAnimationFrame(frame) }
  }, [fadingDots.size, fadeDelay])

  const getOpacityWithDelay = (dotX, dotY, dotKey) => {
    const distance = Math.sqrt((mousePos.x - dotX) ** 2 + (mousePos.y - dotY) ** 2)
    if (distance <= proximityRadius)
      return Math.max(backgroundOpacity, (1 - distance / proximityRadius) * maxOpacity)
    if (fadeDelay > 0 && fadingDots.has(dotKey)) {
      const elapsed = Date.now() - fadingDots.get(dotKey)
      return Math.max(backgroundOpacity, maxOpacity * (1 - Math.min(elapsed / fadeDelay, 1)))
    }
    return backgroundOpacity
  }

  const getColorWithHover = (dotX, dotY, dotKey) => {
    const opacity = fadeDelay > 0 ? getOpacityWithDelay(dotX, dotY, dotKey) : getOpacity(dotX, dotY)
    if (opacity > backgroundOpacity) {
      const hoverAmount = (opacity - backgroundOpacity) / (maxOpacity - backgroundOpacity)
      return { color: dotColor, opacity: opacity + hoverAmount * hoverDarken }
    }
    return { color: dotColor, opacity }
  }

  const cols = Math.ceil(dimensions.width / spacing)
  const rows = Math.ceil(dimensions.height / spacing)

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {(gridType === "dots-lines" || gridType === "lines" || gridType === "plus-lines") && (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          {Array.from({ length: cols }).map((_, i) => {
            const x = i * spacing + spacing / 2
            return <line key={`v-${i}`} x1={x} y1={0} x2={x} y2={dimensions.height} stroke={dotColor} strokeWidth={1} opacity={backgroundOpacity} />
          })}
          {Array.from({ length: rows }).map((_, i) => {
            const y = i * spacing + spacing / 2
            return <line key={`h-${i}`} x1={0} y1={y} x2={dimensions.width} y2={y} stroke={dotColor} strokeWidth={1} opacity={backgroundOpacity} />
          })}
        </svg>
      )}

      {(gridType === "dots-lines" || gridType === "dots") && dots.map((dot) => {
        const opacity = fadeDelay > 0 ? getOpacityWithDelay(dot.x, dot.y, dot.key) : getOpacity(dot.x, dot.y)
        return (
          <div
            key={dot.key}
            style={{
              position: "absolute",
              left: dot.x,
              top: dot.y,
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              backgroundColor: dotColor,
              opacity,
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.2s ease-out",
              pointerEvents: "none",
            }}
          />
        )
      })}

      {(gridType === "plus" || gridType === "plus-lines") && dots.map((dot) => {
        const { color, opacity } = getColorWithHover(dot.x, dot.y, dot.key)
        const plusSize = dotSize * 2
        const ht = thickness / 2
        return (
          <svg
            key={dot.key}
            style={{
              position: "absolute",
              left: dot.x,
              top: dot.y,
              width: plusSize,
              height: plusSize,
              opacity,
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.2s ease-out",
              pointerEvents: "none",
            }}
          >
            <path
              d={`M ${plusSize/2-ht} 0 L ${plusSize/2+ht} 0 L ${plusSize/2+ht} ${plusSize/2-ht} L ${plusSize} ${plusSize/2-ht} L ${plusSize} ${plusSize/2+ht} L ${plusSize/2+ht} ${plusSize/2+ht} L ${plusSize/2+ht} ${plusSize} L ${plusSize/2-ht} ${plusSize} L ${plusSize/2-ht} ${plusSize/2+ht} L 0 ${plusSize/2+ht} L 0 ${plusSize/2-ht} L ${plusSize/2-ht} ${plusSize/2-ht} Z`}
              fill={color}
            />
          </svg>
        )
      })}

      {gridType === "lines" && (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          {Array.from({ length: cols }).map((_, i) => {
            const x = i * spacing + spacing / 2
            return <line key={`v-hover-${i}`} x1={x} y1={0} x2={x} y2={dimensions.height} stroke={dotColor} strokeWidth={1} opacity={getOpacity(x, mousePos.y)} style={{ transition: "opacity 0.2s ease-out" }} />
          })}
          {Array.from({ length: rows }).map((_, i) => {
            const y = i * spacing + spacing / 2
            return <line key={`h-hover-${i}`} x1={0} y1={y} x2={dimensions.width} y2={y} stroke={dotColor} strokeWidth={1} opacity={getOpacity(mousePos.x, y)} style={{ transition: "opacity 0.2s ease-out" }} />
          })}
        </svg>
      )}
    </div>
  )
}
