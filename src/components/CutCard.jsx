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
  const source = [card.author, card.year].filter(Boolean).join(' · ')

  return (
    <article
      className={`cut-card${card.pinned ? ' pinned' : ''}`}
      style={{ animationDelay: `${index * 0.055}s` }}
      onClick={onClick}
    >
      <div className="cut-ordinal">{String(index + 1).padStart(2, '0')}</div>
      <div className="cut-meta">
        <span className="cut-meta-source">{source}</span>
        {card.createdAt && (
          <span className="cut-meta-date">{formatDate(card.createdAt)}</span>
        )}
      </div>
      <div className="cut-tagline">{card.tagline}</div>
      {condensed.length > 0 && (
        <p className="card-text cut-condensed">
          {condensed.map((t, i) => (
            <span key={i} className={t.cls}>{t.text}</span>
          ))}
        </p>
      )}
    </article>
  )
}
