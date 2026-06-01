import * as React from "react"
import { motion } from "framer-motion"

let idCounter = 0
const genId = () => `card_${Date.now().toString(36)}_${idCounter++}`

const placeholderImage = {
  src:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'><rect fill='#ddd' width='160' height='90'/><path d='M0 0L160 90M160 0L0 90' stroke='#aaa' stroke-width='4'/></svg>`
    ),
  alt: "Placeholder",
}

function toObjList(arr) {
  return (arr.length ? arr : [placeholderImage]).map((img) => {
    if (typeof img === "string") return { id: genId(), src: img, alt: "" }
    if (img && typeof img === "object" && img.src) return { id: genId(), ...img }
    return { id: genId(), src: placeholderImage.src, alt: placeholderImage.alt }
  })
}

export default function CardStack(props) {
  const {
    images = [],
    items = null,
    renderCard = null,
    onFrontClick = null,
    offset = 10,
    scaleStep = 0.06,
    dimStep = 0.15,
    stiff = 170,
    damp = 26,
    ratio = "16 / 9",
    borderRadius = 8,
    style = {},
    ...rest
  } = props

  const useItems = items !== null

  const [cards, setCards] = React.useState(
    useItems ? (items.length ? items : []) : toObjList(images)
  )

  React.useEffect(() => {
    if (useItems) {
      setCards((prev) => {
        const prevMap = Object.fromEntries(prev.map((c) => [c.id, c]))
        const kept = prev.filter((c) => items.some((it) => it.id === c.id)).map((c) => ({
          ...prevMap[c.id],
          ...items.find((it) => it.id === c.id),
        }))
        const added = items.filter((it) => !prev.some((c) => c.id === it.id))
        return [...kept, ...added]
      })
    } else {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const prev = cards.slice()
      const next = []
      const srcList = images.length ? images : [placeholderImage]
      srcList.forEach((img) => {
        const src = typeof img === "string" ? img : img.src
        const idx = prev.findIndex((c) => c.src === src)
        if (idx > -1) {
          next.push(prev.splice(idx, 1)[0])
        } else {
          if (typeof img === "object" && img.src) next.push({ id: genId(), ...img })
          else next.push({ id: genId(), src, alt: "" })
        }
      })
      setCards(next)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(useItems ? items : images)])

  const moveToEnd = (i) => setCards((prev) => [...prev.slice(i + 1), prev[i]])

  const spring =
    stiff || damp
      ? { type: "spring", stiffness: stiff, damping: damp }
      : undefined

  const wrapperStyle = {
    ...style,
    position: "relative",
    width: style.width ?? 250,
    aspectRatio: ratio,
    overflow: "visible",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  }
  delete wrapperStyle.height

  if (cards.length === 0) return null

  return (
    <div {...rest} style={wrapperStyle}>
      <ul style={{ position: "relative", width: "100%", height: "100%", margin: 0, padding: 0 }}>
        {cards.map((card, i) => {
          const front = i === 0
          const { id, src, alt } = card
          const brightness = Math.max(0.1, 1 - i * dimStep)
          const baseZ = cards.length - i
          return (
            <motion.li
              key={id}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius,
                listStyle: "none",
                cursor: front ? "grab" : "auto",
                overflow: "hidden",
                touchAction: "none",
                zIndex: baseZ,
                transition: "box-shadow 0.3s cubic-bezier(.4,0,.2,1)",
              }}
              animate={{
                top: `calc(${i * -offset}%)`,
                scale: 1 - i * scaleStep,
                filter: `brightness(${brightness})`,
                zIndex: baseZ,
                transition: spring,
              }}
              drag={front ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragMomentum={false}
              onDragEnd={() => moveToEnd(i)}
              onClick={front && onFrontClick ? () => onFrontClick(card) : undefined}
              whileDrag={
                front
                  ? { zIndex: cards.length, cursor: "grabbing", scale: 1 - i * scaleStep + 0.05, rotate: 2 }
                  : {}
              }
            >
              {renderCard ? (
                renderCard(card, i, front)
              ) : (
                <img
                  src={src}
                  alt={alt || "Card image"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    pointerEvents: "none",
                    display: "block",
                    transition: "filter 0.3s cubic-bezier(.4,0,.2,1)",
                  }}
                />
              )}
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
