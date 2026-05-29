import { formatDate } from '../utils'

function buildCondensed(segments) {
  return (segments || [])
    .filter(s => s.type !== 'context')
    .map(s => ({
      text: s.text,
      cls: s.type === 'both' ? 'word-feed-both' : s.type === 'power' ? 'word-feed-power' : 'word-feed-highlight',
    }))
}

export default function CutCard({ card, index, onClick }) {
  const condensed = buildCondensed(card.segments)

  return (
    <article
      className="cut-card"
      style={{ animationDelay: `${index * 0.055}s` }}
      onClick={onClick}
    >
      <div className="cut-card-inner">
        <div className="cut-tagline">{card.tagline}</div>
        <div className="cut-meta">
          <span className="cut-meta-left">
            {card.pinned && <span className="cut-pin">●&ensp;</span>}
            {card.author}&ensp;{card.year}
          </span>
          {card.createdAt && (
            <span className="cut-date">{formatDate(card.createdAt)}</span>
          )}
        </div>
        {condensed.length > 0 && (
          <p className="card-text">
            {condensed.map((t, i) => (
              <span key={i} className={t.cls}>{t.text}</span>
            ))}
          </p>
        )}
      </div>
    </article>
  )
}
