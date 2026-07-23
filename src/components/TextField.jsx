export default function TextField({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-sm font-medium text-aspire-navy">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded border border-aspire-border bg-white p-3 font-sans text-sm text-aspire-navy focus:border-aspire-orange focus:outline-none"
      />
    </label>
  )
}
