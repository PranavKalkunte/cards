export default function TextRenderer({ segments }) {
  return (
    <p className="card-text">
      {segments.map((seg, i) => (
        <span key={i} className={`word-${seg.type}`}>
          {seg.text}
        </span>
      ))}
    </p>
  )
}
