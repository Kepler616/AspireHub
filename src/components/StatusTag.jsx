const VARIANTS = {
  success: 'bg-aspire-success-bg text-aspire-success',
  warning: 'bg-aspire-warning-bg text-aspire-warning',
  error: 'bg-aspire-error-bg text-aspire-error',
}

export default function StatusTag({ variant = 'success', children }) {
  return (
    <span className={`inline-flex items-center rounded px-2.5 py-1 font-sans text-xs font-medium ${VARIANTS[variant]}`}>
      {children}
    </span>
  )
}
