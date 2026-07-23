export default function TextAreaField({ label, value, onChange, rows = 5 }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-sm font-medium text-aspire-navy">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        className="w-full resize-none rounded border border-aspire-border bg-white p-3 font-sans text-sm text-aspire-navy focus:border-aspire-orange focus:outline-none"
      />
    </label>
  )
}
