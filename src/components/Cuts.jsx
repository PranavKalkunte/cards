import CutCard from './CutCard'

export default function Cuts({ cards, tags, onCardClick, onTogglePin }) {
  const all = Object.values(cards).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
  const pinned = all.filter(c => c.pinned)
  const rest   = all.filter(c => !c.pinned)
  const list   = [...pinned, ...rest]

  return (
    <div className="cuts page">
      <div className="cuts-inner">
        {list.map((card, i) => (
          <CutCard
            key={card.id}
            card={card}
            index={i}
            onClick={() => onCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  )
}
