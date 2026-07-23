export default function FakeDataBadge({ label = 'Sample data' }) {
  return (
    <span className="inline-flex items-center rounded border border-aspire-border bg-white px-2.5 py-1 font-sans text-xs font-medium text-aspire-muted">
      {label}
    </span>
  )
}
