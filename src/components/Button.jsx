const VARIANTS = {
  primary: 'bg-aspire-orange text-white hover:bg-[#B87730] disabled:bg-aspire-disabled-bg disabled:text-aspire-disabled-text',
  secondary: 'bg-white text-aspire-navy border border-aspire-navy hover:bg-aspire-hover disabled:border-aspire-disabled-text disabled:text-aspire-disabled-text',
  ghost: 'bg-transparent text-aspire-navy hover:bg-aspire-hover disabled:text-aspire-disabled-text',
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded px-5 py-2.5 font-sans text-sm font-medium transition-colors disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
